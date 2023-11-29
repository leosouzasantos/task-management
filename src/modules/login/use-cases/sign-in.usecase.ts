import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from '../dtos/sign-in.dto';
import { IUserRepository } from 'src/modules/users/repositories/user-repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignInUseCase {
  constructor(
    private jwtService: JwtService,
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: SignInDto) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Incorrect email and/or password.');
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      throw new UnauthorizedException('Incorrect email and/or password.');
    }
    const accessToken = this.jwtService.sign(
      {
        sub: user.id,
        email: user.email,
      },
      {
        expiresIn: '7 days',
      },
    );

    return {
      accessToken,
    };
  }
}
