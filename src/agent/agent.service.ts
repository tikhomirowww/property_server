import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Agent } from "./agent.model";
import { InjectModel } from "@nestjs/sequelize";
import { AgentDto } from "./agent.dto";

@Injectable()
export class AgentService {
  constructor(@InjectModel(Agent) private agentModel: typeof Agent) {}

  async getAgents(): Promise<Agent[]> {
    return this.agentModel.findAll();
  }

  async getAgentById(agentId: string): Promise<Agent> {
    const agent = await this.agentModel.findOne({
      where: { id: agentId },
      // include: ["property"],
    });
    if (!agent) {
      throw new NotFoundException(`Agent with id ${agentId} not found`);
    }
    return agent;
  }

  async createAgent(agent: AgentDto): Promise<Agent> {
    const user = await this.agentModel.findOne({
      where: { email: agent.email },
    });
    if (user) {
      // console.log(user);
      throw new BadRequestException("Email already exsist");
    }

    return await this.agentModel.create(agent);
  }

  async deleteAgent(agentId: string): Promise<void> {
    const agentById = await this.getAgentById(agentId);
    if (!agentById) {
      throw new NotFoundException(`Agent with id ${agentId} not found`);
    }
    await agentById.destroy();
  }

  async updateAgent(agentId: string, agent: AgentDto): Promise<Agent> {
    const agentById = await this.getAgentById(agentId);
    if (!agentById) {
      throw new NotFoundException(`Agent with id ${agentId} not found`);
    }
    return await agentById.update(agent);
  }
}
