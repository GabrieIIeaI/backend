import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDto } from './page-meta.dto';

/**
 * Classe que serve de base para retorno dos dados que possuem paginação
 */
export class PageDto<TData> {
  @ApiProperty({ isArray: true })
  readonly data: TData[];

  @ApiProperty({ type: () => PageMetaDto })
  readonly meta: PageMetaDto;

  constructor(data: TData[], meta: PageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
