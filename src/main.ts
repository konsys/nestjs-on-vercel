import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './AppFactory';
import compression from 'compression';

export async function bootstrap() {
    const app = await NestFactory.create(AppModule);


    app.enableCors({
        exposedHeaders: '*',
    });
    app.use(compression());
    await app.listen(process.env.PORT ?? port);
}

