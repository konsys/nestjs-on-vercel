import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from 'compression';
import serverless = require('serverless-http');

// export async function bootstrap() {
//     const app = await NestFactory.create(AppModule);


//     app.enableCors({
//         exposedHeaders: '*',
//     });
//     app.use(compression());
//     await app.listen(process.env.PORT ?? port);
// }






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