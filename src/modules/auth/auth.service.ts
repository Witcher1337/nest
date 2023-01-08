import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private config: ConfigService, private jwtService: JwtService) {}
  login() {
    return this.signToken(1, 'testLogin');
  }

  register() {
    return 'Register success';
  }

  async signToken(userId: number, login: string) {
    const payload = {
      sub: userId,
      login,
    };

    const secret = this.config.get('JWT_SECRET');

    console.log(secret);
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '15m',
        secret,
      }),
    };
  }
}
