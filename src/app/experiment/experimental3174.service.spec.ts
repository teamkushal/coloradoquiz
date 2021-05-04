import { TestBed } from '@angular/core/testing';

import { Experimental3174Service } from './experimental3174.service';

describe('Experimental3174Service', () => {
  let service: Experimental3174Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3174Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
