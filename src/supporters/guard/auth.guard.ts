import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/providers/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const session = req.session;
    console.log(session);
    const userId = session?.userId;

    if (!userId) return false;

    const isValid = await this.authService.validUser(userId);
    return isValid;
  }
}
