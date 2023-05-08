import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Property } from "./properties.model";
import { PropertiesDto } from "./properties.dto";

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Property) private propertyModel: typeof Property) {}

  async getProperties(): Promise<Property[]> {
    return this.propertyModel.findAll();
  }

  async getPropertyById(properyId: string): Promise<Property> {
    return this.propertyModel.findOne({ where: { id: properyId } });
  }

  async createProperty(property: PropertiesDto): Promise<Property> {
    return await this.propertyModel.create({ ...property });
  }

  async deletePropery(propertyId: string): Promise<void> {
    const propertyById = await this.getPropertyById(propertyId);
    if (!propertyById) {
      throw new NotFoundException(`Agent with id ${propertyById} not found`);
    }
    await propertyById.destroy();
  }

  async updateProperty(
    propertyId: string,
    property: PropertiesDto
  ): Promise<Property> {
    const propertyById = await this.getPropertyById(propertyId);
    if (!propertyById) {
      throw new NotFoundException(`Agent with id ${propertyById} not found`);
    }
    return await propertyById.update(property);
  }
}
