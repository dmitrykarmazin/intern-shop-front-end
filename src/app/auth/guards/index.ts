import { AuthGuard } from './auth.guard';
import { NonAuthorizedGuard } from './non-authorized.guard';

export const guards: any[] = [
  AuthGuard,
  NonAuthorizedGuard
];

export * from './auth.guard';
export * from './non-authorized.guard';
