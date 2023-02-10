/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-01-04 15:03:06
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-09 10:53:47
 * @FilePath: /nest-l1/src/app.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { PrismaClient, prisma } from '@prisma/client';
import { Cat, User } from './interfaces/cat.interface';

@Injectable()
export class AppService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    return this.cats;
  }
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): string {
    return 'ddddd';
  }
}
