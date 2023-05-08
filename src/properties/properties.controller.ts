import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { Property } from "./properties.model";
import { PropertiesDto } from "./properties.dto";

@Controller("property")
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async getProperties(): Promise<Property[]> {
    const property = await this.propertiesService.getProperties();
    return property;
  }

  @Get("/:propertyId")
  async getPropertyById(
    @Param() { propertyId }: { propertyId: string }
  ): Promise<Property> {
    return this.propertiesService.getPropertyById(propertyId);
  }

  @Post()
  async createProperty(@Body() property: PropertiesDto): Promise<Property> {
    return this.propertiesService.createProperty(property);
  }

  @Delete("/:propertyId")
  async deleteProperty(
    @Param() { propertyId }: { propertyId: string }
  ): Promise<void> {
    return this.propertiesService.deletePropery(propertyId);
  }

  @Put("/:propertyId")
  async updateProperty(
    @Param() { propertyId }: { propertyId: string },
    @Body() property: PropertiesDto
  ): Promise<Property> {
    return this.propertiesService.updateProperty(propertyId, property);
  }
}
