import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

type ParamsUser = {
  id: string;
  idEmpresa: string;
};

type QueryUser = {
  p: string;
  r: string;
};

type BodyUser = {
  name: string;
  idade: number;
};

@Controller('users')
export class UserController {
  @Get('/:id/:idEmpresa')
  findById(@Param() params: ParamsUser) {
    return 'Usuario do ID ' + params.id + '- Empresa ID ' + params.idEmpresa;
  }

  @Get('/findByPages')
  findByPages(@Query() queries: QueryUser) {
    return 'Queries ' + queries.p;
  }

  @Post('/create')
  create(@Body() body: BodyUser) {
    return {
      ...body,
      id: randomUUID(),
    };
  }
}
