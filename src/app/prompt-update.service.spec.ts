import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';

import { PromptUpdateService } from './prompt-update.service';
import { HttpRequestInterceptorService } from './http-request-interceptor.service';

describe('PromptUpdateService', () => {
  let service: PromptUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PromptUpdateService,
        HttpRequestInterceptorService
      ],
      providers: [
        SwUpdate,
      ]
    });
    service = TestBed.inject(PromptUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
