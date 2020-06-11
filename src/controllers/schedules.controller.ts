import { Controller, Get, Param, Post } from "@nestjs/common";
import { ScheduleService } from "src/services/schedules.service";
import { schedules } from "src/models/schedules.entity";

@Controller('schedules')
export class scheduleController {
    constructor(
        private readonly scheduleService: ScheduleService
    ) {}

    @Get('Chronogram/:Id')
    public async getChronogram(@Param() params: any) {
        return await this.scheduleService.getSchedulesActivity(<number>params.Id);
    }

    @Get()
    public async getSchedules() {
        return await this.scheduleService.getAll();
    }

    @Get(':Id')
    public async getSchedule(@Param() params: any) {
        return await this.scheduleService.getOne(<number>params.Id);
    }

    @Post(':obj')
    public async postSchedule(@Param() params: any) {
        return await this.scheduleService.insertOne(<schedules>params.obj);
    }

    @Post(':objs')
    public async postSchedules(@Param() params: any) {
        return await this.scheduleService.insertAll(<schedules[]>params.objs);
    }
}