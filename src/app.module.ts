/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-01-04 15:03:06
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-10 10:29:36
 * @FilePath: /nest-l1/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UpdateModule } from './update/update.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [UpdateModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
