import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Supabase } from '../services/supabase';

export const authGuard: CanActivateFn = async () => {
  const sb = inject(Supabase).client;
  const router = inject(Router);
  const { data } = await sb.auth.getSession();
  return data.session ? true : router.createUrlTree(['/login']);
};
