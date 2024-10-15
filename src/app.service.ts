import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Função hello World
   * Manter apenas por ser o primeiro ponto de entrada para testes
   * @returns Uma string de bem vindo
   */
  getHello(): string {
    return 'ViagensPromo Backend';
  }
}
