import { Controller, Get, Query, Session, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { converters } from 'src/presentation/converters/user.converters';
import { UserListRequest } from 'src/presentation/dto/users/request/user-list.request';
import { UserCountResponse } from 'src/presentation/dto/users/response/user-count.response';
import { UserListResponse } from 'src/presentation/dto/users/response/user-list.response';
import { UsersReader } from 'src/providers/users.reader';
import { AuthGuard } from 'src/supporters/guard/auth.guard';

@ApiTags('/users')
@UseGuards(AuthGuard)
@Controller('users')
export class UsersApi {
  constructor(private readonly usersReader: UsersReader) {}

  @ApiOperation({ summary: '회원 목록 조회' })
  @ApiResponse({
    status: 200,
    description: '회원 목록 조회 완료',
    type: UserListResponse,
  })
  @Get()
  async getAll(
    @Query() dto: UserListRequest,
    @Session() session: any,
  ): Promise<UserListResponse[]> {
    console.log(session);
    const users = await this.usersReader.readAll(dto);
    return converters.toListDto(users);
  }

  @ApiOperation({ summary: '회원 수 조회' })
  @ApiResponse({
    status: 200,
    description: '회원 수 조회 완료',
    type: UserCountResponse,
  })
  @Get('count')
  async getCount(): Promise<UserCountResponse> {
    const count = await this.usersReader.getCount();
    return { count };
  }
}
