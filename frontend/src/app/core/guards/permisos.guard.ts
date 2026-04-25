import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const permisosGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const modulo: string = route.data['modulo'];

  return authService.getMe().pipe(
    map((user: any) => {
      if (user.role === 'admin') return true;
      let permisos: any = {};
      try {
        permisos = JSON.parse(user.permisos || '{}');
      } catch {
        permisos = {};
      }
      if (permisos[modulo] === true) return true;
      router.navigate(['/dashboard']);
      return false;
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};
