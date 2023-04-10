import { Injectable } from '@nestjs/common';
import { Agent } from './agent.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AgentService {
  constructor(@InjectModel(Agent) private agentModel: typeof Agent) {}

  async getAgents(): Promise<Agent[]> {
    return this.agentModel.findAll();
  }
}
