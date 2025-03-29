import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, Max, Min } from 'class-validator';

export enum SortBy {
  NAME = 'name',
  ACCOUNT_ID = 'accountId',
  CREATED_AT = 'createdAt',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class UserListRequest {
  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  @Type(() => Number)
  readonly page: number;

  @ApiProperty({ example: 15 })
  @IsInt()
  @Max(20)
  @Type(() => Number)
  readonly limit: number;

  @ApiProperty({ example: SortBy.CREATED_AT, enum: SortBy })
  @IsEnum(SortBy)
  readonly sortBy: SortBy;

  @ApiProperty({ example: SortOrder.DESC, enum: SortOrder })
  @IsEnum(SortOrder)
  readonly sortOrder: SortOrder;
}
