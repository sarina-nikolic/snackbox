import { Controller, Get, Param, Post, Delete,  HttpCode, ParseIntPipe, Body } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { SnackModel } from './snacks.interface';

@Controller('snacks')
export class SnacksController {
  constructor(private readonly snacksService: SnacksService) {}

@Get()
public findAll(): Array<SnackModel> {
  return this.snacksService.findAll();
}

// Param values are always strings. ParseIntPipe converts id to number
@Get(':id')
public findOne(@Param('id', ParseIntPipe) id: number): SnackModel {
  return this.snacksService.findOne(id);
}

@Post()
// Post usally transfers data to api, here we have just a json, so we use body
public create(@Body() snack: SnackModel): SnackModel {
  return this.snacksService.create(snack);
}

@HttpCode(204)
  postMethod(): string {
    return 'Lots of snacks';
  }

  
@Delete(':id')
// void represents the return value of functions which don't return a value
public delete(@Param('id', ParseIntPipe) id: number): void {  
  this.snacksService.delete(id);
}

}
