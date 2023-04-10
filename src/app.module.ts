import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { AgentModule } from './agent/agent.module';
import {ConfigModule} from "@nestjs/config";
import {Agent} from "./agent/agent.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Agent],
            autoLoadModels: true
        }),
        AgentModule,
    ]
})
export class AppModule {}
