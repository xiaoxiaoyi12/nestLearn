import { ApiProperty } from '@nestjs/swagger';
import { createUser } from './update.dto';
export class updateRes extends createUser {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;
}
