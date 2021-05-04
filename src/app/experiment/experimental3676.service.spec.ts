import { TestBed } from '@angular/core/testing';

import { Experimental3676Service } from './experimental3676.service';

describe('Experimental3676Service', () => {
  let service: Experimental3676Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3676Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
