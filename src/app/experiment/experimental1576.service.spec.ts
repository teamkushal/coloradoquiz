import { TestBed } from '@angular/core/testing';

import { Experimental1576Service } from './experimental1576.service';

describe('Experimental1576Service', () => {
  let service: Experimental1576Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1576Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
