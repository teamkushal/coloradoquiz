import { TestBed } from '@angular/core/testing';

import { Experimental1134Service } from './experimental1134.service';

describe('Experimental1134Service', () => {
  let service: Experimental1134Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1134Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
