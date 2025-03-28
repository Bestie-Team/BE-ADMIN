import { User } from 'src/types/providers/user.types';

export const converters = {
  toListDto(users: User[]) {
    return users.map((user) => ({
      ...user,
      createdAt: user.createdAt.toISOString(),
      deletedAt: user.deletedAt ? user.deletedAt.toISOString() : null,
    }));
  },
};
