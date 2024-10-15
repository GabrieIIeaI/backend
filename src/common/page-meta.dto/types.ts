import { PageOptionsDto } from '../dtos';

export interface PageMetaDtoParametersProps {
  /**
   * Propriedade de paginação
   */
  pageOptionsDto: PageOptionsDto;
  /**
   * Contagem total de itens que possuem no banco
   */
  itemCount: number;
}
