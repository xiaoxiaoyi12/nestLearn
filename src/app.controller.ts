/*
 * @Author: 王娟娟 wangjuanjuan@xiaomi.com
 * @Date: 2023-01-04 15:03:06
 * @LastEditors: 王娟娟 wangjuanjuan@xiaomi.com
 * @LastEditTime: 2023-02-09 10:53:04
 * @FilePath: /nest-l1/src/app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Param, Post, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CreateCatDto } from './dto/createCat.dto';

interface paramsType {
  id?: number;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Post('post')
  // create(): string {
  //   return 'create a new cat';
  // }

  @Get()
  getHello(): string {
    return this.appService.getUsers();
  }

  // @Get(':id')
  // findOne(@Param() params: paramsType): string {
  //   console.log(params.id);
  //   return 'sssss';
  // }

  // @Get(':num')
  // findNum(@Param('num') num: number): string {
  //   console.log(num);
  //   return 'dddddd';
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.appService.create(createCatDto);
  // }
  // @Get()
  // async findAll() {
  //   return this.appService.findAll();
  // }
}

// @Controller({ host: 'admin.privacy.mi.com' })
// export class TestController {
//   @Get()
//   getName(): string {
//     return 'zhangsan';
//   }
// }
