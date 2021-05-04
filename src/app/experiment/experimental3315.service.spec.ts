import { TestBed } from '@angular/core/testing';

import { Experimental3315Service } from './experimental3315.service';

describe('Experimental3315Service', () => {
  let service: Experimental3315Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3315Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
