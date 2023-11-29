import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { IUserRepository } from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma/user.prisma.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
