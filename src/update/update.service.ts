/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-01-19 10:56:25
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-10 11:05:34
 * @FilePath: /nest-l1/src/update/update.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UpdateService {
  constructor(private prismaService: PrismaService) {}

  findOne(username: string): string {
    if (username === 'son') {
      return 'son is here';
    }
    return 'no one here';
  }
  async init(data: any) {
    return await this.prismaService.user.create({ data: data });
  }

  async getData() {
    return await this.prismaService.user.findMany({
      where: {
        name: 'wangtest3',
      },
    });
  }
}
