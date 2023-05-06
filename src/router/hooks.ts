import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const beforeEachHook = (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  if (to) document.title = `${String(to.name)} - William.dev`;
  next();
};
