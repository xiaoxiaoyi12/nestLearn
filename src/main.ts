/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-01-04 15:03:06
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-10 10:34:09
 * @FilePath: /nest-l1/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8090);
}
bootstrap();
