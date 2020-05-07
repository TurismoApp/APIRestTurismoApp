import { reposComplement } from "./repositorys.template";
import { EntityRepository, Repository } from "typeorm";
import { schedules } from "src/models/schedules.entity";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ScheduleService implements reposComplement {
    constructor(
        @Inject('SCHEDULES_REPOSITORY') private readonly repo: Repository<schedules>
    ) {
    
    }
    getAll() {
        return this.repo.find();
    }
    getOne(id: number) {
       return this.repo.findOne(id);
    }
    insertAll(data: any[]) {
       return this.repo.insert(data);
    }
    insertOne(data: any) {
       return this.repo.insert(data);
    }
}