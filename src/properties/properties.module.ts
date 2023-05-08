import { Module } from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Property } from "./properties.model";

@Module({
  imports: [SequelizeModule.forFeature([Property])],
  providers: [PropertiesService],
  controllers: [PropertiesController],
})
export class PropertiesModule {}
