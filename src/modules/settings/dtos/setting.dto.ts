import { IsString, IsOptional } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  key: string;

  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @IsString()
  type?: string;
}

export class UpdateSettingDto {
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @IsString()
  type?: string;
}