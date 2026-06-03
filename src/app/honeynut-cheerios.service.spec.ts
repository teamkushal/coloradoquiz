import { TestBed } from '@angular/core/testing';

import { HoneynutCheeriosService } from './honeynut-cheerios.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('HoneynutCheeriosService', () => {
  let service: HoneynutCheeriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())]
    });
    service = TestBed.inject(HoneynutCheeriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
