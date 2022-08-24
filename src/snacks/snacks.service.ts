import { Injectable } from '@nestjs/common';
import { SnackModel } from './snacks.interface';

@Injectable()
export class SnacksService {
 private snacks: Array<SnackModel> = [];

 public findAll(): Array<SnackModel> {
  return this.snacks;
 }

public findOne(id: number): SnackModel {
  const snack: SnackModel = this.snacks.find(snack => snack.id === id);

  if (!snack) {
    throw new NotFoundException('Snack not found.');
  }

  return snack;
}}
