import { TestBed } from '@angular/core/testing';

import { Experimental3374Service } from './experimental3374.service';

describe('Experimental3374Service', () => {
  let service: Experimental3374Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3374Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
