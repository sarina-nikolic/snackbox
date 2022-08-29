import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  ParseIntPipe,
  Body,
  Query,
  ParseFloatPipe,
} from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { SnackModel } from './snacks.interface';
import { PriceQueryDto } from './snacks.dto';

@Controller('snacks')
export class SnacksController {
  constructor(private readonly snacksService: SnacksService) {}

  @Get()
  public find(
    @Query() query: PriceQueryDto,
    // @Query('minPrice', ParseFloatPipe) minPrice?: number,
    // @Query('maxPrice', ParseFloatPipe) maxPrice?: number,
  ): Array<SnackModel> {
    // https://stackoverflow.com/questions/28975896/is-there-a-way-to-check-for-both-null-and-undefined
    if (query.minPrice == null) {
      query.minPrice = 0;
    }
    if (query.maxPrice == null) {
      query.maxPrice = 1000;
    }
    return this.snacksService.find(query.minPrice, query.maxPrice);
  }

  // Param values are always strings. ParseIntPipe converts id to number
  @Get(':id')
  public findById(@Param('id', ParseIntPipe) id: number): SnackModel {
    return this.snacksService.findById(id);
  }

  @Post()
  // Post usally transfers data to api, here we have just a json, so we use body
  public create(@Body() snack: SnackModel): SnackModel {
    return this.snacksService.create(snack);
  }

  @Delete(':id')
  // void represents the return value of functions which don't return a value
  public delete(@Param('id', ParseIntPipe) id: number): void {
    this.snacksService.delete(id);
  }
}
