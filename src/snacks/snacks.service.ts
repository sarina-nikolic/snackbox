import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { SnackModel } from './snacks.interface';
import { snacksData } from './snacks.data';

@Injectable()
export class SnacksService {
  private snacks: Array<SnackModel> = snacksData;

  public findAll(): Array<SnackModel> {
    return this.snacks;
  }

  public findOne(id: number): SnackModel {
    const snack: SnackModel = this.snacks.find((snack) => snack.id === id);

    if (!snack) {
      throw new NotFoundException(
        `Whoops! Who ate all of the snack with id=${id}?!`,
      );
    }

    return snack;
  }

  public create(snack: SnackModel): SnackModel {
    // if snack is already in use
    const nameExists: boolean = this.snacks.some(
      (item) => item.name === snack.name,
    );
    if (nameExists) {
      throw new UnprocessableEntityException('Snack already exists.');
    }

    // next id for a new snack
    const maxId: number = Math.max(...this.snacks.map((snack) => snack.id), 0);
    snack.id = maxId + 1;

    const newSnack: SnackModel = {
      // spread can expand strings
      ...snack,
    };

    // push concatenates
    this.snacks.push(newSnack);

    return newSnack;
  }

  // Deletes snack in in-memory-list, not in json list!
  public delete(id: number): void {
    const index: number = this.snacks.findIndex((snack) => snack.id === id);

    // when no findIndex() match is found, -1 is returned
    if (index === -1) {
      throw new NotFoundException(
        `Whoops! Cannot delete non existing snack with id=${id}.`,
      );
    }
    // splice removes array elements
    this.snacks.splice(index, 1);
  }
}
