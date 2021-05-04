import { TestBed } from '@angular/core/testing';

import { Experimental2673Service } from './experimental2673.service';

describe('Experimental2673Service', () => {
  let service: Experimental2673Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2673Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
