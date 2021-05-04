import { TestBed } from '@angular/core/testing';

import { Experimental3651Service } from './experimental3651.service';

describe('Experimental3651Service', () => {
  let service: Experimental3651Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3651Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
