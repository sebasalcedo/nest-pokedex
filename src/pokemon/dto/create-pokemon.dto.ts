import { IsInt, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNumber({}, { message: 'propierty no must be a number' })
  @Min(1, { message: 'propierty no must be at least 1 digit' })
  @IsPositive({ message: 'propierty no must be a positive number' })
  @IsInt({ message: 'propierty no must be an integer' })
  readonly no: number;
}
