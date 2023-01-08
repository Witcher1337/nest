import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  getAll() {
    this.prisma.user
      .findFirst({
        where: {
          login: 'test',
        },
      })
      .then((v) => {
        console.log('then', v);
      })
      .catch((e) => {
        console.log('e', e);
      });
    return [];
  }
}
