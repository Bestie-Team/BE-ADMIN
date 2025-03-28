import { ApiProperty } from '@nestjs/swagger';

type Provider = 'GOOGLE' | 'KAKAO' | 'APPLE';

export class UserListResponse {
  @ApiProperty({ example: 'uuid' })
  readonly id: string;

  @ApiProperty({ example: 'lighty_id' })
  readonly accountId: string;

  @ApiProperty({ example: '김철수' })
  readonly name: string;

  @ApiProperty({ example: 'GOOGLE', enum: ['GOOGLE', 'KAKAO', 'APPLE'] })
  readonly provider: Provider;

  @ApiProperty({ example: '2025-01-01T00:00:00.000Z' })
  readonly createdAt: string;

  @ApiProperty({ example: '2025-01-01T00:00:00.000Z OR null', nullable: true })
  readonly deletedAt: string | null;

  @ApiProperty({ example: 'uuid' })
  readonly profileImageUrl: string | null;
}
