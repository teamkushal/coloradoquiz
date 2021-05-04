import { TestBed } from '@angular/core/testing';

import { Experimental3053Service } from './experimental3053.service';

describe('Experimental3053Service', () => {
  let service: Experimental3053Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3053Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
