import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateUserDto } from '../dtos/user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly prisma: PrismaService) {}
  async execute(data: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new BadRequestException('User already exists');
    }

    data.password = await bcrypt.hash(data.password, 10);

    return await this.prisma.user.create({
      data,
    });
  }
}
