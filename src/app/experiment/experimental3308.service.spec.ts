import { TestBed } from '@angular/core/testing';

import { Experimental3308Service } from './experimental3308.service';

describe('Experimental3308Service', () => {
  let service: Experimental3308Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3308Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
