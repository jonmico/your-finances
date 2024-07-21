export class AppError extends Error {
  statusCode: number;

  constructor(errorMessage: string, statusCode: number) {
    super();
    this.statusCode = statusCode;
    this.message = errorMessage;
  }
}
