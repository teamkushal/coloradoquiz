import { TestBed } from '@angular/core/testing';

import { IpinfoService } from './ipinfo.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('IpinfoService', () => {
  let service: IpinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(IpinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
