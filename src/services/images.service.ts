import { EntityRepository, Repository, SelectQueryBuilder, createQueryBuilder } from "typeorm";
import { images } from "src/models/images.entity";
import { reposComplement } from "./repositorys.template";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ImagesService implements reposComplement {
    constructor(
        @Inject('IMAGES_REPOSITORY') private readonly repo: Repository<images>
    ) {}

    getAll() {
        return this.repo.find();
    }

    getImages(id: number) {
        return this.repo.find({where: {idActivity: id}});
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