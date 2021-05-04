import { TestBed } from '@angular/core/testing';

import { Experimental2669Service } from './experimental2669.service';

describe('Experimental2669Service', () => {
  let service: Experimental2669Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2669Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
