import { IsString, IsOptional } from 'class-validator';

export class CreateStaticPageDto {
  @IsString()
  slug: string;

  @IsString()
  title: string;

  @IsString()
  content: string;
}

export class UpdateStaticPageDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
