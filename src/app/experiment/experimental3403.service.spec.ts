import { TestBed } from '@angular/core/testing';

import { Experimental3403Service } from './experimental3403.service';

describe('Experimental3403Service', () => {
  let service: Experimental3403Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3403Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
