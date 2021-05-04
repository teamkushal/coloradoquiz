import { TestBed } from '@angular/core/testing';

import { Experimental3406Service } from './experimental3406.service';

describe('Experimental3406Service', () => {
  let service: Experimental3406Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3406Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
