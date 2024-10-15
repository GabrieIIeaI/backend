import { AbstractEntity } from 'src/common/entities';
import { Entity, Column } from 'typeorm';

/**
 * Definição da entidade de produtos igual a do banco
 */
@Entity('products')
export class Product extends AbstractEntity {
  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;
}
