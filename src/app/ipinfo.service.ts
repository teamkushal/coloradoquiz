import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ipinforesponse } from './ipinforesponse';

@Injectable({ providedIn: 'root' })
export class IpinfoService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://ipinfo.io/json?token=61c154777637f4';

  getIpAddress(): Observable<Ipinforesponse> {
    return this.http
      .get<Ipinforesponse>(this.endpoint)
      .pipe(map((response) => ({ ...response, lastupdated: new Date() })));
  }
}
