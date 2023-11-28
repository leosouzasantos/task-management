/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';

export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { name, email, password }: CreateUserDto,
    metadata: ArgumentMetadata,
  ) {
    if (!name || !email || !password) {
      throw new HttpException(
        `[name, email, password] is required`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return {
      name,
      email,
      password,
    };
  }
}
