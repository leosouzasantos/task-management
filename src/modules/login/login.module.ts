import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { IUserRepository } from '../users/repositories/user-repository';
import { PrismaUserRepository } from '../users/repositories/prisma/user.prisma.repository';
import { SignInUseCase } from './use-cases/sign-in.usecase';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_TOKEN,
    }),
  ],
  controllers: [LoginController],
  providers: [
    SignInUseCase,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class LoginModule {}
