import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './AppFactory';
import compression from 'compression';

// export async function bootstrap() {
//     const app = await NestFactory.create(AppModule);


//     app.enableCors({
//         exposedHeaders: '*',
//     });
//     app.use(compression());
//     await app.listen(process.env.PORT ?? port);
// }



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import serverless = require('serverless-http');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = '.netlify/functions/main';
    app.enableCors({
        exposedHeaders: '*',
    });
    app.use(compression());

    await app.init();

    const expressApp = app.getHttpAdapter().getInstance();
    return serverless(expressApp)
}

let server;
export const handler = async (event, context, callback) => {
    server = server ?? (await bootstrap());
    return server(event, context, callback);
};