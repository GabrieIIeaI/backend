import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';

@Module({
  // Acesso ao banco de dados
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'store',
      entities: [Product],
      synchronize: true,
    }),

    //Módulos
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
