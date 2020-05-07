import { Controller, Get, Param, Post } from "@nestjs/common";
import { inCharge } from "src/models/inCharge.entity";
import { inChargeService } from "src/services/inCharge.service";

@Controller('inCharge')
export class inChargeController {
    constructor(
        private readonly inChargeService: inChargeService
    ) {}

    @Get()
    public async getinCharges() {
        return await this.inChargeService.getAll();
    }

    @Get(':Id')
    public async getinCharge(@Param() params: any) {
        return await this.inChargeService.getOne(<number>params.Id);
    }

    @Post(':obj')
    public async postinCharge(@Param() params: any) {
        return await this.inChargeService.insertOne(<inCharge>params.obj);
    }

    @Post(':objs')
    public async postinCharges(@Param() params: any) {
        return await this.inChargeService.insertAll(<inCharge[]>params.objs);
    }
}