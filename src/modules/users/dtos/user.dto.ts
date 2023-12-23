export type CreateUserDto = {
  password: string;
  email: string;
  name: string;
};

export type UserCreatedDto = {
  id: string;
  created_at: Date;
} & CreateUserDto;
