import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports : [TypeOrmModule.forFeature([UserRepository]), SharedModule, AuthModule],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
