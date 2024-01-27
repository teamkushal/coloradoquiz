import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { Ipinforesponse } from './ipinforesponse';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpinfoService {
  private myBehaviorSubject: BehaviorSubject<Ipinforesponse>;
  public myObservable$: Observable<Ipinforesponse>;
  private subscription: Subscription = new Subscription();


  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.myBehaviorSubject = new BehaviorSubject<Ipinforesponse>(this.createDummy());
    this.myObservable$ = this.myBehaviorSubject as Observable<Ipinforesponse>;
  }

  createDummy(): Ipinforesponse {
    return {
      ip: "0.0.0.0",
      hostname: "example.com",
      city: "example city",
      region: "example region",
      country: "example country",
      loc: "0, 0",
      org: "example inc",
      postal: "00000",
      timezone: "UTC"
    };
  }

  getIpAddress() {
    const myObservable = this.http.get(`https://ipinfo.io/json?token=61c154777637f4`) as Observable<Ipinforesponse>;
    myObservable.subscribe((response: Ipinforesponse) => {
      this.myBehaviorSubject.next(response);
    });
  }
}
