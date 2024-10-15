import { PrimaryGeneratedColumn } from 'typeorm';

/**
 * Classe que serve de base para todas as outras entidades
 */
export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  public id: number;
}
