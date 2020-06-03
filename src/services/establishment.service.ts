import { EntityRepository, Repository, createQueryBuilder } from "typeorm";
import { Establishment } from "src/models/Establishment.entity";
import { reposComplement } from "./repositorys.template";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class EstablishmentService implements reposComplement {

    constructor(
        @Inject('ESTABLISH_REPOSITORY') private readonly repo: Repository<Establishment>
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