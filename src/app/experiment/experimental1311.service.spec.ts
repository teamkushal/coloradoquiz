import { TestBed } from '@angular/core/testing';

import { Experimental1311Service } from './experimental1311.service';

describe('Experimental1311Service', () => {
  let service: Experimental1311Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1311Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
