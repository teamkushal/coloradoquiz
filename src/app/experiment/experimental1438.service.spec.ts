import { TestBed } from '@angular/core/testing';

import { Experimental1438Service } from './experimental1438.service';

describe('Experimental1438Service', () => {
  let service: Experimental1438Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1438Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
