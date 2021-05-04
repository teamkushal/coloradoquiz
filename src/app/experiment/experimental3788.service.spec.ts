import { TestBed } from '@angular/core/testing';

import { Experimental3788Service } from './experimental3788.service';

describe('Experimental3788Service', () => {
  let service: Experimental3788Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3788Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
