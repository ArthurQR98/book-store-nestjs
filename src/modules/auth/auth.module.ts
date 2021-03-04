import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../../config/config.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '../../config/config.module';
import { Configuration } from '../../config/config.keys';

@Module({
  imports: [TypeOrmModule.forFeature([AuthRepository]), PassportModule.register({
    defaultStrategy: 'jwt',
  }),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory(config: ConfigService) {
      return {
        secret: config.get(Configuration.JWT_SECRET),
        signOptions: {
          expiresIn: config.get(Configuration.JWT_EXPIRE_TIME),
        }
      };
    },
  })
  ],
  controllers: [AuthController],
  providers: [AuthService, ConfigService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule { }
