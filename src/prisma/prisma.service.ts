/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-02-09 17:32:10
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-09 17:39:52
 * @FilePath: /nest-l1/src/prisma/prisma.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
