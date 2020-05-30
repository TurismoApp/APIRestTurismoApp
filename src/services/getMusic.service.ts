import { Injectable, Inject } from "@nestjs/common";
import { FIREBASE_ADMIN_INJECT, FirebaseAdminSDK } from "@tfarras/nestjs-firebase-admin";

@Injectable()
export class MusicService {

    private dataFire: any;
    constructor(
        @Inject(FIREBASE_ADMIN_INJECT) private fireDB: FirebaseAdminSDK
    ) { }

    async getTopCanciones() {
        let fireDb = this.fireDB.firestore();
        return (await fireDb.collection('/musica').doc('r5l4p1KwQ1ZP2qdT3zdg').get()).data();
    }

    async getTopAlbumes() {
        let fireDb = this.fireDB.firestore();
        return (await fireDb.collection('/musica').doc('u1vMO0cMHvdLmKUQTb1h').get()).data();
    }

    async getTopArtistas() {
        let fireDb = this.fireDB.firestore();
        return (await fireDb.collection('/musica').doc('FSgvowz9dQ1VEcwpFHyU').get()).data();
    }
}