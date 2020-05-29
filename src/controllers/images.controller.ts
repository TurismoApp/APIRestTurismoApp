import { Controller, Get, Param, Post } from "@nestjs/common";
import { ImagesService } from "src/services/images.service";
import { images } from "src/models/images.entity";

@Controller('images')
export class imageController {
    constructor(
        private readonly imageService: ImagesService
    ) {}

    @Get()
    public async getimages() {
        return await this.imageService.getAll();
    }

    @Get(':Id')
    public async getimage(@Param() params: any) {
        return await this.imageService.getOne(<number>params.Id);
    }

    @Get('/activity/:id')
    public async getimagesActivitys(@Param() params: any) {
        return await this.imageService.getImages(<number>params.id);
    }
    @Post(':obj')
    public async postImage(@Param() params: any) {
        return await this.imageService.insertOne(<images>params.obj);
    }

    @Post(':objs')
    public async postImages(@Param() params: any) {
        return await this.imageService.insertAll(<images[]>params.objs);
    }
}