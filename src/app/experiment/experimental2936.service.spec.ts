import { TestBed } from '@angular/core/testing';

import { Experimental2936Service } from './experimental2936.service';

describe('Experimental2936Service', () => {
  let service: Experimental2936Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2936Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
