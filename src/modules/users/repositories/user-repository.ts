import { CreateUserDto } from '../dtos/user.dto';

export abstract class IUserRepository {
  abstract findByEmail(email: string): Promise<CreateUserDto | null>;
  abstract save(data: CreateUserDto): Promise<CreateUserDto>;
  abstract findById(id: string): Promise<CreateUserDto | null>;
}
