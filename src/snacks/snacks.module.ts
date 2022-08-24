import { Module } from '@nestjs/common';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';

@Module({
  imports: [],
  controllers: [SnacksController],
  providers: [SnacksService],
})
export class SnacksModule {}
