import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { CreateUserDto } from './dtos/user.dto';
import { CreateUserValidationPipe } from './pipes/create-user.validation.pipe';
import { AuthGuard } from 'src/infra/providers/auth.guard';
import { ProfileUserUseCase } from './use-cases/profile-user.usecase';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: CreateUserUseCase,
    private readonly profileUser: ProfileUserUseCase,
  ) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDto) {
    return this.createUser.execute(data);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    return this.profileUser.execute(req.user.sub);
  }
}
