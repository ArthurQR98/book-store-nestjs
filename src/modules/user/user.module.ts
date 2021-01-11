import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';

@Module({
    imports : [TypeOrmModule.forFeature([UserRepository]), SharedModule],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
