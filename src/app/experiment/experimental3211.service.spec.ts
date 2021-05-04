import { TestBed } from '@angular/core/testing';

import { Experimental3211Service } from './experimental3211.service';

describe('Experimental3211Service', () => {
  let service: Experimental3211Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3211Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
