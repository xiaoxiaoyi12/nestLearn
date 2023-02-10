/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-01-19 10:58:38
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-10 11:01:01
 * @FilePath: /nest-l1/src/update/update.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Post('find-one')
  findOne(@Body() body: any) {
    return this.updateService.findOne(body.username);
  }
  @Post('create')
  async init(@Body() param: any) {
    return this.updateService.init(param);
  }
  @Get()
  async getInitData() {
    return this.updateService.getData();
  }
}
