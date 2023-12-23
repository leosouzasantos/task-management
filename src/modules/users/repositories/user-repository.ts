import { CreateUserDto, UserCreatedDto } from '../dtos/user.dto';

export abstract class IUserRepository {
  abstract findByEmail(email: string): Promise<UserCreatedDto | null>;
  abstract save(data: CreateUserDto): Promise<CreateUserDto>;
  abstract findById(id: string): Promise<CreateUserDto | null>;
}
