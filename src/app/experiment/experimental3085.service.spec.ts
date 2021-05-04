import { TestBed } from '@angular/core/testing';

import { Experimental3085Service } from './experimental3085.service';

describe('Experimental3085Service', () => {
  let service: Experimental3085Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3085Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
