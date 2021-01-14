import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { AuthModule } from '../auth/auth.module';
import { RoleRepository } from '../role/role.repository';

@Module({
    imports : [TypeOrmModule.forFeature([UserRepository, RoleRepository]), AuthModule],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
