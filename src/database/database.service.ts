import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Configuration } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports : [ConfigModule],
        inject : [ConfigService],
        async useFactory(config :ConfigService){
            return{
                type: 'mysql',
                host: config.get(Configuration.HOST),
                port: 3307,
                username : config.get(Configuration.USERNAME),
                password : config.get(Configuration.PASSWORD),
                database : config.get(Configuration.DATABASE),
                entities : [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations : [__dirname + '/migrations/*{.ts,.js}'],
                synchronize: true,
            } as ConnectionOptions
        } 
    })
]