import { ApiProperty } from '@nestjs/swagger';

export class UserCountResponse {
  @ApiProperty({ example: 54 })
  readonly count: number;
}
