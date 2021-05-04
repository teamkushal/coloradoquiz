import { TestBed } from '@angular/core/testing';

import { Experimental3661Service } from './experimental3661.service';

describe('Experimental3661Service', () => {
  let service: Experimental3661Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3661Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
