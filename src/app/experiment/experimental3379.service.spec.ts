import { TestBed } from '@angular/core/testing';

import { Experimental3379Service } from './experimental3379.service';

describe('Experimental3379Service', () => {
  let service: Experimental3379Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3379Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
