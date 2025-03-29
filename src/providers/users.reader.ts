import { Injectable } from '@nestjs/common';
import { UserListRequest } from 'src/presentation/dto/users/request/user-list.request';
import { Prisma } from 'src/prisma/prisma';
import { User } from 'src/types/providers/user.types';

@Injectable()
export class UsersReader {
  constructor(private readonly prisma: Prisma) {}

  async readAll(input: UserListRequest): Promise<User[]> {
    const { page, limit, sortBy, sortOrder } = input;

    return this.prisma.user.findMany({
      select: {
        id: true,
        accountId: true,
        name: true,
        provider: true,
        profileImageUrl: true,
        createdAt: true,
        deletedAt: true,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        [sortBy]: sortOrder,
      },
    });
  }
}
