/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-01-19 11:08:44
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-10 11:12:43
 * @FilePath: /nest-l1/src/update/update.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateController } from './update.controller';
// import { PrismaModule } from '../prisma/prisma.module';

@Module({
  // imports: [PrismaModule],
  providers: [UpdateService],
  controllers: [UpdateController],
})
export class UpdateModule {}
