import { TestBed } from '@angular/core/testing';

import { Experimental3579Service } from './experimental3579.service';

describe('Experimental3579Service', () => {
  let service: Experimental3579Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3579Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
