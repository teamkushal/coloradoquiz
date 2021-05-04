import { TestBed } from '@angular/core/testing';

import { Experimental1909Service } from './experimental1909.service';

describe('Experimental1909Service', () => {
  let service: Experimental1909Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1909Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
