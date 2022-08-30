import { ApiProperty } from '@nestjs/swagger';

export class PriceQueryDto {
  @ApiProperty()
  public minPrice: number;

  @ApiProperty()
  public maxPrice: number;
}
