import { TestBed } from '@angular/core/testing';

import { Experimental367Service } from './experimental367.service';

describe('Experimental367Service', () => {
  let service: Experimental367Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental367Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
