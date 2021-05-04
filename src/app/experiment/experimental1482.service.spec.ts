import { TestBed } from '@angular/core/testing';

import { Experimental1482Service } from './experimental1482.service';

describe('Experimental1482Service', () => {
  let service: Experimental1482Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1482Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
