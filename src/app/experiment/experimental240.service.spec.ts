import { TestBed } from '@angular/core/testing';

import { Experimental240Service } from './experimental240.service';

describe('Experimental240Service', () => {
  let service: Experimental240Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental240Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
