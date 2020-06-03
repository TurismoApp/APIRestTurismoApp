import { EntityRepository, Repository, createQueryBuilder } from "typeorm";
import { place } from "src/models/place.entity";
import { reposComplement } from "./repositorys.template";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class placeService implements reposComplement {

    constructor(
        @Inject('PLACES_REPOSITORY') private readonly repo: Repository<place>
    ) { }

    getAll() {
        return this.repo.find();
    }

    async getAllimages() {
        return await createQueryBuilder('place')
            .leftJoinAndSelect('place.images', 'images').leftJoinAndSelect('place.places', 'ubications')
            .getMany();
    }

    async getfilterid(id: number) {
        return await createQueryBuilder('place')
            .leftJoinAndSelect('place.images', 'images').leftJoinAndSelect('place.ubications', 'ubications')
            .leftJoinAndSelect('place.idEstablish', 'Establishment').where({ idtestablish: id })
            .getMany();
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