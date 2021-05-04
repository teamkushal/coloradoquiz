import { TestBed } from '@angular/core/testing';

import { Experimental1276Service } from './experimental1276.service';

describe('Experimental1276Service', () => {
  let service: Experimental1276Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1276Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
