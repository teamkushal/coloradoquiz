import { TestBed } from '@angular/core/testing';

import { Experimental3344Service } from './experimental3344.service';

describe('Experimental3344Service', () => {
  let service: Experimental3344Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3344Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
