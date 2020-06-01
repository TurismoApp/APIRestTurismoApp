import { Controller, Get, Param, Post } from "@nestjs/common";
import { placeService } from "src/services/place.service";
import { place } from "src/models/place.entity";

@Controller('places')
export class placeController {
    constructor(
        private placeService: placeService
    ) { }

    @Get()
    public async getPlaces() {
        return await this.placeService.getAllimages();
    }

    @Get(':Id')
    public async getPlace(@Param() params: any) {
        return await this.placeService.getfilterid(<number>params.Id);
        //return await this.placeService.getOne(<number>params.Id);
    }

    @Post(':obj')
    public async postPlace(@Param() params: any) {
        return await this.placeService.insertOne(<place>params.obj);
    }

    @Post(':objs')
    public async postPlaces(@Param() params: any) {
        return await this.placeService.insertAll(<place[]>params.objs);
    }

}