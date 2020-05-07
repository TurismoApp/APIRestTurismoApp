import { EntityRepository, Repository } from "typeorm";
import { activity } from "src/models/activity.entity";
import { reposComplement } from "./repositorys.template";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class ActivityService implements reposComplement {
    
    constructor(
        @Inject('ACTIVITY_REPOSITORY') private readonly repo: Repository<activity>
    ) {}

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