import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const [msg, stack] =
      exception instanceof HttpException
        ? [exception.message, exception.stack]
        : [
          exception instanceof Error ? exception.message : 'Unknow stack',
          exception instanceof Error ? exception.stack : 'Unknow stack',
        ];

    console.log(stack);

    res.status(status).json({
      code: status,
      url: req.url,
      method: req.method,
      params: req.params,
      body: req.body,
      msg: msg,
      dto:
        exception instanceof BadRequestException
          ? (exception.getResponse() as any).message
          : undefined,
      date: new Date().toLocaleString('zh-CN'),
    });
  }
}