import { Global, Module } from '@nestjs/common';
import { Prisma } from 'src/prisma/prisma';

@Global()
@Module({
  providers: [Prisma],
  exports: [Prisma],
})
export class PrismaModule {}
