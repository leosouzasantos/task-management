import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateUserDto, UserCreatedDto } from '../../dtos/user.dto';
import { IUserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserCreatedDto | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  async save(data: CreateUserDto): Promise<CreateUserDto> {
    return await this.prisma.user.create({ data });
  }

  async findById(id: string): Promise<CreateUserDto | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
