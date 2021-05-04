import { TestBed } from '@angular/core/testing';

import { Experimental3056Service } from './experimental3056.service';

describe('Experimental3056Service', () => {
  let service: Experimental3056Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3056Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
