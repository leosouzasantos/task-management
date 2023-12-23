import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateUserDto } from '../../dtos/user.dto';
import { IUserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<CreateUserDto> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
  async save(data: CreateUserDto): Promise<CreateUserDto> {
    return await this.prisma.user.create({ data });
  }

  async findById(id: string): Promise<CreateUserDto> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
