import { TestBed } from '@angular/core/testing';

import { Experimental1331Service } from './experimental1331.service';

describe('Experimental1331Service', () => {
  let service: Experimental1331Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1331Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
