import { TestBed } from '@angular/core/testing';

import { Experimental3460Service } from './experimental3460.service';

describe('Experimental3460Service', () => {
  let service: Experimental3460Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3460Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
