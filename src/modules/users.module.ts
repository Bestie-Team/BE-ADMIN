import { Module } from '@nestjs/common';
import { UsersApi } from 'src/presentation/apis/users.api';
import { UsersReader } from 'src/providers/users.reader';

@Module({
  controllers: [UsersApi],
  providers: [UsersReader],
})
export class UsersModule {}
