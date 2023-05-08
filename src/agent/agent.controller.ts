import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from "@nestjs/common";
import { AgentService } from "./agent.service";
import { Agent } from "./agent.model";
import { AgentDto } from "./agent.dto";
import { agent } from "supertest";

@Controller("agent")
export class AgentController {
  constructor(private readonly userService: AgentService) {}

  @Get()
  async getAgents(): Promise<Agent[]> {
    return this.userService.getAgents();
  }

  @Get("/:agentId")
  async getAgentById(
    @Param() { agentId }: { agentId: string }
  ): Promise<Agent> {
    const agentsById = this.userService.getAgentById(agentId);
    return agentsById;
  }

  @Post()
  async createAgent(@Body() agent: AgentDto): Promise<Agent> {
    return await this.userService.createAgent(agent);
  }

  @Delete("/:agentId")
  async deleteAgent(@Param() { agentId }: { agentId: string }): Promise<void> {
    return this.userService.deleteAgent(agentId);
  }

  @Put("/:agentId")
  async updateAgent(
    @Param() { agentId }: { agentId: string },
    @Body() agent: AgentDto
  ): Promise<Agent> {
    return this.userService.updateAgent(agentId, agent);
  }
}
