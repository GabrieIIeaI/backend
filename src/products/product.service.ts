import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { PageOptionsDto } from "src/common/dtos";
import { PageDto } from "src/common/page.dto";
import { PageMetaDto } from "src/common/page-meta.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    public async getProducts(
        pageOptionsDto: PageOptionsDto
    ) : Promise<PageDto<Product>> {
        const queryBuilder = this.productRepository.createQueryBuilder('products')

        queryBuilder
            .orderBy('products.id', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take)
        
        const itemCount = await queryBuilder.getCount()
        const { entities } = await queryBuilder.getRawAndEntities()

        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto })

        return new PageDto(entities, pageMetaDto)
    }
}