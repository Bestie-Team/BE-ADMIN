import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Prisma } from 'src/prisma/prisma';
import { v4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: Prisma) {}

  // 회원가입
  async register(input: { username: string; password: string }): Promise<any> {
    const { password, username } = input;
    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.prisma.admin.create({
      data: { id: v4(), password: hashedPassword, username },
    });
  }

  // 로그인
  async login(
    input: { username: string; password: string },
    session: Record<string, any>,
  ): Promise<any> {
    const { username, password } = input;
    const user = await this.prisma.admin.findUnique({ where: { username } });

    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException();
    }

    // 세션에 사용자 정보 저장
    session.userId = user.id;
    session.username = user.username;
    return;
  }

  async validUser(id: string) {
    const user = await this.prisma.admin.findUnique({
      where: {
        id,
      },
    });
    return !!user;
  }
}
