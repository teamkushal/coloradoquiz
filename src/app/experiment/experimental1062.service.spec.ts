import { TestBed } from '@angular/core/testing';

import { Experimental1062Service } from './experimental1062.service';

describe('Experimental1062Service', () => {
  let service: Experimental1062Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1062Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
