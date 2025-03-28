import { Module } from '@nestjs/common';
import { AuthApi } from 'src/presentation/apis/auth.api';
import { AuthService } from 'src/providers/auth.service';
import { AuthGuard } from 'src/supporters/guard/auth.guard';

@Module({
  controllers: [AuthApi],
  providers: [AuthService, AuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
