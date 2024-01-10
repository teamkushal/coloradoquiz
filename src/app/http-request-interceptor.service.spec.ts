import { TestBed } from '@angular/core/testing';

import { HttpRequestInterceptorService } from './http-request-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpRequestInterceptorService', () => {
  let service: HttpRequestInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HttpRequestInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
