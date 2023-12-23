import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { CreateUserDto } from './dtos/user.dto';
import { CreateUserValidationPipe } from './pipes/create-user.validation.pipe';
import { AuthGuard } from 'src/infra/providers/auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly createUser: CreateUserUseCase) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDto) {
    return this.createUser.execute(data);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile() {
    return 'ok';
  }
}
