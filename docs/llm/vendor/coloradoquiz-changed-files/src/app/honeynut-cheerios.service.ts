import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { HoneynutCheeriosRequest } from './honeynut-cheerios-request';
import { HoneynutCheeriosRequestData } from './honeynut-cheerios-request-data';
import { Ipinforesponse } from './ipinforesponse';

@Service()
export class HoneynutCheeriosService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://honeynutcheerios.2w7sp317.workers.dev/';

  createReal(
    mydata: string,
    currentUrl: string,
    referringUrl: string,
    ipinfo: Ipinforesponse,
  ): HoneynutCheeriosRequest {
    const data: HoneynutCheeriosRequestData = { ipinfo, mydata };
    return {
      ipaddress: ipinfo.ip,
      country: ipinfo.country,
      currentUrl: currentUrl ?? '',
      referringUrl: referringUrl ?? '',
      data,
    };
  }

  submit(mydata: string, currentUrl: string, referringUrl: string): void {
    const ipinfoString = localStorage.getItem('ipInformation');
    if (!ipinfoString) {
      return;
    }
    const ipinfo = JSON.parse(ipinfoString) as Ipinforesponse;
    const body = this.createReal(mydata, currentUrl, referringUrl, ipinfo);
    this.http.post(this.endpoint, body).subscribe({
      error: (error) => console.error('Telemetry submission failed', error),
    });
  }
}
