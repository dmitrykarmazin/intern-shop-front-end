import { RouterEffects } from './router.effect';
import { NotificationsEffects } from './notification';

export const effects: any[] = [RouterEffects, NotificationsEffects];

export * from './router.effect';
export * from './notification';
