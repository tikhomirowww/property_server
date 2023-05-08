import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Agent } from "src/agent/agent.model";

@Table({ modelName: "properties" })
export class Property extends Model<Property> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  name: string;

  @Column
  location: string;

  @Column
  price: string;

  @Column
  image: string;

  @ForeignKey(() => Agent)
  @Column
  agentId: string;

  @BelongsTo(() => Agent)
  agent: Agent[];

  @CreatedAt
  created_at: string;

  @UpdatedAt
  updated_at: string;
}
