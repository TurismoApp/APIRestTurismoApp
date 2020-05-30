import { Module } from "@nestjs/common";
import { activityProviders, imagesProviders, inChargeProviders, schedulesProviders, ubicationsProviders, placesProviders, EstablishProviders } from "./Entity.providers";
import { databaseProviders } from "./database.providers";


@Module({
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