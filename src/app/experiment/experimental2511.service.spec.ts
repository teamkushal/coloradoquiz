import { TestBed } from '@angular/core/testing';

import { Experimental2511Service } from './experimental2511.service';

describe('Experimental2511Service', () => {
  let service: Experimental2511Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2511Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
