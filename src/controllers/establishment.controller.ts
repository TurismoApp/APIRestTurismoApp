import { Controller, Get, Param, Post } from "@nestjs/common";
import { Establishment } from "src/models/Establishment.entity";
import { EstablishmentService } from "src/services/establishment.service";

@Controller('establishment')
export class establishmentController {
    constructor(
        private readonly EstablishmentService: EstablishmentService
    ) { }

    @Get()
    public async getEstablishment() {
        return await this.EstablishmentService.getAll();
    }

    @Get(':Id')
    public async getEstablishments(@Param() params: any) {
        return await this.EstablishmentService.getOne(<number>params.Id);
    }

    @Post(':obj')
    public async postEstablishment(@Param() params: any) {
        return await this.EstablishmentService.insertOne(<Establishment>params.obj);
    }

    @Post(':objs')
    public async postEstablishments(@Param() params: any) {
        return await this.EstablishmentService.insertAll(<Establishment[]>params.objs);
    }
}