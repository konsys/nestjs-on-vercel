import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { Request, Response, Express } from 'express';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module.js';
import * as compression from 'compression';
import * as express from 'express';


export const port = process.env.PORT || 9000
export class AppFactory {
  static create(): {
    appPromise: Promise<INestApplication<any>>;
    expressApp: Express;
  } {
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const appPromise = NestFactory.create(AppModule, adapter);

    appPromise
      .then(async (app) => {
        // You can add all required app configurations here

        /**
         * Enable cross-origin resource sharing (CORS) to allow resources to be requested from another domain.
         * @see {@link https://docs.nestjs.com/security/cors}
         */
        app.enableCors({
          exposedHeaders: '*',
        });
        await app.listen(process.env.PORT ?? port)
        app.use(compression());
        app.init();
      })
      .catch((err) => {
        throw err;
      });

    // IMPORTANT This express application-level middleware makes sure the NestJS app is fully initialized
    expressApp.use((req: Request, res: Response, next) => {
      appPromise
        .then(async (app) => {
          await app.init();
          next();
        })
        .catch((err) => next(err));
    });

    return { appPromise, expressApp };
  }
}
