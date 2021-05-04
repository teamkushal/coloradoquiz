import { TestBed } from '@angular/core/testing';

import { Experimental1272Service } from './experimental1272.service';

describe('Experimental1272Service', () => {
  let service: Experimental1272Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1272Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
