import { Module } from "@nestjs/common";
import { activityProviders, imagesProviders, inChargeProviders, schedulesProviders, ubicationsProviders, placesProviders, EstablishProviders } from "./Entity.providers";
import { databaseProviders, firebaseApp } from "./database.providers";


@Module({
    imports: [
        firebaseApp
    ],
    providers: [
        ...databaseProviders,
        ...activityProviders,
        ...imagesProviders,
        ...inChargeProviders,
        ...schedulesProviders,
        ...ubicationsProviders,
        ...placesProviders,
        ...EstablishProviders
    ],
    exports: [
        ...databaseProviders,
        ...activityProviders,
        ...imagesProviders,
        ...inChargeProviders,
        ...schedulesProviders,
        ...ubicationsProviders,
        ...placesProviders,
        ...EstablishProviders
    ]
})

export class DatabaseModule { }