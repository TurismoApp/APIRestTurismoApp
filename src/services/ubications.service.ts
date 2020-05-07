import { EntityRepository, Repository } from "typeorm";
import { ubications } from "src/models/ubications.entity";
import { reposComplement } from "./repositorys.template";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class UbicationsService implements reposComplement {
    constructor(
        @Inject('UBICATIONS_REPOSITORY') private readonly repo: Repository<ubications>
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