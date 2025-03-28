import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth.module';
import { UsersApi } from 'src/presentation/apis/users.api';
import { UsersReader } from 'src/providers/users.reader';

@Module({
  imports: [AuthModule],
  controllers: [UsersApi],
  providers: [UsersReader],
})
export class UsersModule {}
