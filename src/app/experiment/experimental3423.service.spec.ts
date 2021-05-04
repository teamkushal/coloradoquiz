import { TestBed } from '@angular/core/testing';

import { Experimental3423Service } from './experimental3423.service';

describe('Experimental3423Service', () => {
  let service: Experimental3423Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3423Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
