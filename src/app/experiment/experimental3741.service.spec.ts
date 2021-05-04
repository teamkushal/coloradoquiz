import { TestBed } from '@angular/core/testing';

import { Experimental3741Service } from './experimental3741.service';

describe('Experimental3741Service', () => {
  let service: Experimental3741Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3741Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
