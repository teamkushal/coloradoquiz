import { TestBed } from '@angular/core/testing';

import { Experimental1381Service } from './experimental1381.service';

describe('Experimental1381Service', () => {
  let service: Experimental1381Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1381Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
