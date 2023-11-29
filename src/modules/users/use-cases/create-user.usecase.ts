import { CreateUserDto } from '../dtos/user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUserRepository } from '../repositories/user-repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUserDto) {
    const user = await this.userRepository.findByEmail(data.email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    data.password = await bcrypt.hash(data.password, 10);

    return this.userRepository.save(data);
  }
}
