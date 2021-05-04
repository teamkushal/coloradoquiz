import { TestBed } from '@angular/core/testing';

import { Experimental1887Service } from './experimental1887.service';

describe('Experimental1887Service', () => {
  let service: Experimental1887Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1887Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
