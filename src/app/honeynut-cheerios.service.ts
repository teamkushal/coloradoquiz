import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { Ipinforesponse } from './ipinforesponse';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HoneynutCheeriosRequest } from './honeynut-cheerios-request';
import { HoneynutCheeriosRequestData } from './honeynut-cheerios-request-data';

@Injectable({
  providedIn: 'root'
})
export class HoneynutCheeriosService {
  private myBehaviorSubject: BehaviorSubject<string>;
  public myObservable$: Observable<string>;
  private subscription: Subscription = new Subscription();


  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.myBehaviorSubject = new BehaviorSubject<string>("");
    this.myObservable$ = this.myBehaviorSubject as Observable<string>;
  }

  createDummy(): HoneynutCheeriosRequest {
    const dummyIpinfoResponse = {
      ip: "0.0.0.0",
      hostname: "example.com",
      city: "example city",
      region: "example region",
      country: "example country",
      loc: "0, 0",
      org: "example inc",
      postal: "00000",
      timezone: "UTC",
      lastupdated: new Date()
    } as Ipinforesponse;
    const dummyData = {
      ipinfo: dummyIpinfoResponse,
      mydata: ""
    } as HoneynutCheeriosRequestData;
    const dummy = {
      ipaddress: dummyData.ipinfo.ip,
      country: dummyData.ipinfo.country,
      currentUrl: "",
      referringUrl: "",
      data:dummyData
    } as HoneynutCheeriosRequest;
    return dummy;
  };

  createReal(mydata: string, currentUrl: string, referringUrl: string, ipinfo: Ipinforesponse): HoneynutCheeriosRequest {
    const data = {
      ipinfo: ipinfo,
      mydata: mydata
    } as HoneynutCheeriosRequestData;
    const result = {
      ipaddress: ipinfo.ip,
      country: ipinfo.country,
      currentUrl: currentUrl ?? "",
      referringUrl: referringUrl ?? "",
      data: data
    } as HoneynutCheeriosRequest;
    return result;
  }

  submit(mydata: string, currentUrl: string, referringUrl: string): void {
    // https://honeynutcheerios.2w7sp317.workers.dev/
    const ipinfoString = localStorage.getItem("ipInformation");
    if (ipinfoString !== null || ipinfoString !== undefined ) {
      const ipinfo = JSON.parse(ipinfoString!) as Ipinforesponse;
      const body = this.createReal(mydata, currentUrl, referringUrl, ipinfo);
      const myObservable = this.http.post(`https://honeynutcheerios.2w7sp317.workers.dev/`, body) as Observable<string>;
      myObservable.subscribe((response: string) => {
        this.myBehaviorSubject.next(response);
      });
    }
  }
}
