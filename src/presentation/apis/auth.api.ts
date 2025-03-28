import { Body, Controller, Post, Session } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginRequest } from 'src/presentation/dto/auth/request/login.request';
import { RegisterRequest } from 'src/presentation/dto/auth/request/register.request';
import { AuthService } from 'src/providers/auth.service';

@ApiTags('/auth')
@Controller('auth')
export class AuthApi {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginRequest, @Session() session: any) {
    const user = await this.authService.login(dto, session);
    console.log(session);
    return user;
  }

  @Post('register')
  async register(@Body() dto: RegisterRequest) {
    await this.authService.register(dto);
  }
}
