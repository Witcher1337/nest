import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '../auth/decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('me')
  getMe(@User() user: unknown) {
    return user;
  }
}
