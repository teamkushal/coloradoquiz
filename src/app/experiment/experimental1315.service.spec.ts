import { TestBed } from '@angular/core/testing';

import { Experimental1315Service } from './experimental1315.service';

describe('Experimental1315Service', () => {
  let service: Experimental1315Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1315Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
