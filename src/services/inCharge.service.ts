import { EntityRepository, Repository } from "typeorm";
import { inCharge } from "src/models/inCharge.entity";
import { reposComplement } from "./repositorys.template";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class inChargeService implements reposComplement{
    
    constructor(
        @Inject('INCHARGE_REPOSITORY') private readonly repo: Repository<inCharge>
    ) { }
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