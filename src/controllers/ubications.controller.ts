import { Controller, Get, Param, Post } from "@nestjs/common";
import { ubications } from "src/models/ubications.entity";
import { UbicationsService } from "src/services/ubications.service";

@Controller('ubications')
export class ubicationsController {
    constructor(
        private readonly ubicationsService: UbicationsService
    ) {}

    @Get('activity/:Id')
    public async getUbicationsActivity(@Param() params: any) {
        return await this.ubicationsService.getUbicationActiviy(<number>params.Id);
    }

    @Get()
    public async getUbications() {
        return await this.ubicationsService.getAll();
    }

    @Get(':Id')
    public async getUbication(@Param() params: any) {
        return await this.ubicationsService.getOne(<number>params.Id);
    }

    @Post(':obj')
    public async postUbication(@Param() params: any) {
        return await this.ubicationsService.insertOne(<ubications>params.obj);
    }

    @Post(':objs')
    public async postUbications(@Param() params: any) {
        return await this.ubicationsService.insertAll(<ubications[]>params.objs);
    }
}