import { TestBed } from '@angular/core/testing';

import { Experimental3269Service } from './experimental3269.service';

describe('Experimental3269Service', () => {
  let service: Experimental3269Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3269Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
