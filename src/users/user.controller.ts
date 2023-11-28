import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/user/:id')
  findById(@Param() params: string) {
    return;
  }
}
