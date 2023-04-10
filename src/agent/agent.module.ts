import { Module } from '@nestjs/common';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agent } from './agent.model';

@Module({
  imports: [SequelizeModule.forFeature([Agent])],
  controllers: [AgentController],
  providers: [AgentService],
})
export class AgentModule {}
