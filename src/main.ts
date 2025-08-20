import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const compression = require('compression');


export async function bootstrap() {
    const app = await NestFactory.create(AppModule);


    app.enableCors({
        exposedHeaders: '*',
    });
    app.use(compression());
    await app.listen(process.env.PORT ?? port);
}

