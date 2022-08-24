import { Controller, Get, Param, Post, Delete,  HttpCode, ParseIntPipe, } from '@nestjs/common';
import { SnacksService } from './snacks/snacks.service';

@Controller('snacks')
export class SnacksController {
  constructor(private readonly snacksService: SnacksService) {}

  @Get('/')
  getHello(): string {
    return this.snacksService.getHello();
  }

  @Get('/person/:name')
  getPerson(@Param() params: any): string {
    return this.snacksService.getHello(params.name);
  }

  @Get()
public findAll(): Array<SnackModel> {
  return this.snacksService.findAll();
}


@Get(':id')
public findOne(@Param('id', ParseIntPipe) id: number): SnackModel {
  return this.snacksService.findOne(id);
}

  @Post('/')
  @HttpCode(204)
  postMethod(): string {
    return 'POST request worked';
  }
}
