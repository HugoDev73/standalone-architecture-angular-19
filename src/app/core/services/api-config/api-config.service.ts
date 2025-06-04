import { Injectable } from '@angular/core';
import { ApiBaseAlias } from '../../constants/api-base-alias';
import { environment } from '../../../../environments/environment.development';
import { ApiEndpoint } from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private baseUrls: Record<ApiBaseAlias, string> = {
    [ApiBaseAlias.AUTH]: environment.auth,
    [ApiBaseAlias.BASE]: environment.base,
  };

  getEndpoint(endpoint:ApiEndpoint): string {
    const base = this.baseUrls[endpoint.base];
    const path = endpoint.path
    return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
  }
}
