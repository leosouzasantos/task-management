import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';
import { SignInUseCase } from './use-cases/sign-in.usecase';

@Controller('login')
export class LoginController {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  @Post()
  async signIn(@Body() signInDto: SignInDto) {
    const token = await this.signInUseCase.execute(signInDto);
    return token;
  }
}
