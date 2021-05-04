import { TestBed } from '@angular/core/testing';

import { Experimental1359Service } from './experimental1359.service';

describe('Experimental1359Service', () => {
  let service: Experimental1359Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1359Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
