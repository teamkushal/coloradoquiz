import { TestBed } from '@angular/core/testing';

import { Experimental1535Service } from './experimental1535.service';

describe('Experimental1535Service', () => {
  let service: Experimental1535Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1535Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
