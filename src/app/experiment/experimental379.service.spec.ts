import { TestBed } from '@angular/core/testing';

import { Experimental379Service } from './experimental379.service';

describe('Experimental379Service', () => {
  let service: Experimental379Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental379Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
