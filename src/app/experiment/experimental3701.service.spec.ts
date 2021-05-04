import { TestBed } from '@angular/core/testing';

import { Experimental3701Service } from './experimental3701.service';

describe('Experimental3701Service', () => {
  let service: Experimental3701Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3701Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
