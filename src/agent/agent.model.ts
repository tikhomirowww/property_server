import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";
import { Property } from "src/properties/properties.model";
// import { Property } from "src/properties/properties.model";

@Table({ modelName: "agents" })
export class Agent extends Model<Agent> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column
  phone: string;

  @Column
  image: string;

  @Column
  rating: number;

  @HasMany(() => Property)
  property: Property[];

  @Column
  website: string;

  @CreatedAt
  created_at: string;

  @UpdatedAt
  updated_at: string;
}
