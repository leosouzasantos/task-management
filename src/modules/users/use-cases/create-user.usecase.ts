import { PrismaService } from 'src/infra/prisma/prisma.service';

export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserUseCase {
  constructor(private readonly prisma: PrismaService) {}
  async execute(data: CreateUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new Error('User already exists');
    }

    await this.prisma.user.create({
      data,
    });
  }
}
