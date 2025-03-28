import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { converters } from 'src/presentation/converters/user.converters';
import { UserListRequest } from 'src/presentation/dto/users/request/user-list.request';
import { UserListResponse } from 'src/presentation/dto/users/response/user-list.response';
import { UsersReader } from 'src/providers/users.reader';

@ApiTags('/users')
@Controller('users')
export class UsersApi {
  constructor(private readonly usersReader: UsersReader) {}

  @ApiOperation({ summary: '회원 목록 조회' })
  @ApiResponse({
    status: 200,
    description: '회원 목록 조회',
    type: UserListResponse,
  })
  @Get()
  async getAll(@Query() dto: UserListRequest): Promise<UserListResponse[]> {
    const users = await this.usersReader.readAll(dto);
    return converters.toListDto(users);
  }
}
