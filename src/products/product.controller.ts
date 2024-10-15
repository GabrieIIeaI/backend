import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { PageOptionsDto } from 'src/common/dtos';
import { PageDto } from 'src/common/page.dto';
import { Product } from './product.entity';

@Controller('Produtos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllProducts(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Product>> {
    return await this.productService.getProducts(pageOptionsDto);
  }
}
