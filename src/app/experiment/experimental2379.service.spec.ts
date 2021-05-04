import { TestBed } from '@angular/core/testing';

import { Experimental2379Service } from './experimental2379.service';

describe('Experimental2379Service', () => {
  let service: Experimental2379Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2379Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
