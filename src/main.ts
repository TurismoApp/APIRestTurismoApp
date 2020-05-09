import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IN_CHARGE } from './data/inCharge';
import { inCharge } from './models/inCharge.entity';
import { getRepository } from 'typeorm';
import { activity } from './models/activity.entity';
import { ACTIVITY } from './data/activity';
import { ubications } from './models/ubications.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await getRepository(inCharge).insert(IN_CHARGE);
  await getRepository(activity).insert(ACTIVITY);
  await getRepository(ubications).insert(ubications);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
