import { Module } from "@nestjs/common";
import { activityProviders, imagesProviders, inChargeProviders, schedulesProviders, ubicationsProviders } from "./Entity.providers";
import { databaseProviders } from "./database.providers";

@Module({
    providers: [
        ...databaseProviders,
        ...activityProviders,
        ...imagesProviders,
        ...inChargeProviders,
        ...schedulesProviders,
        ...ubicationsProviders
    ],
    exports: [
        ...databaseProviders,
        ...activityProviders,
        ...imagesProviders,
        ...inChargeProviders,
        ...schedulesProviders,
        ...ubicationsProviders
    ]
})

export class DatabaseModule {}