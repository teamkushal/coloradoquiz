import { TestBed } from '@angular/core/testing';

import { Experimental1000Service } from './experimental1000.service';

describe('Experimental1000Service', () => {
  let service: Experimental1000Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1000Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
