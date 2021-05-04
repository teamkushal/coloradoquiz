import { TestBed } from '@angular/core/testing';

import { Experimental3825Service } from './experimental3825.service';

describe('Experimental3825Service', () => {
  let service: Experimental3825Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3825Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
