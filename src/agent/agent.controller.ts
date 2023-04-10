import { Controller, Get } from '@nestjs/common';
import { AgentService } from './agent.service';
import { Agent } from './agent.model';

@Controller('agent')
export class AgentController {
  constructor(private readonly userService: AgentService) {}

  @Get()
  async getAgents(): Promise<Agent[]> {
    return this.userService.getAgents();
  }
}
