import { TestBed } from '@angular/core/testing';

import { Experimental3737Service } from './experimental3737.service';

describe('Experimental3737Service', () => {
  let service: Experimental3737Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3737Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
