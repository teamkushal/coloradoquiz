import { TestBed } from '@angular/core/testing';

import { Experimental3025Service } from './experimental3025.service';

describe('Experimental3025Service', () => {
  let service: Experimental3025Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3025Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
