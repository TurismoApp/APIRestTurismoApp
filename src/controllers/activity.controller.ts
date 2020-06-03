import { Controller, Get, Param, Post } from "@nestjs/common";
import { ActivityService } from "src/services/activity.service";
import { activity } from "src/models/activity.entity";

@Controller('activitys')
export class activityController {
    constructor(
        private activityService: ActivityService
    ) { }

    @Get()
    public async getActivitys() {
        return await this.activityService.getAllimages();
    }

    @Get(':Id')
    public async getActivity(@Param() params: any) {
        return await this.activityService.getOne(<number>params.Id);
    }

    @Post(':obj')
    public async postActicity(@Param() params: any) {
        return await this.activityService.insertOne(<activity>params.obj);
    }

    @Post(':objs')
    public async postActicitys(@Param() params: any) {
        return await this.activityService.insertAll(<activity[]>params.objs);
    }

}