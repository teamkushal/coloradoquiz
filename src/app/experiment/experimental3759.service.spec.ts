import { TestBed } from '@angular/core/testing';

import { Experimental3759Service } from './experimental3759.service';

describe('Experimental3759Service', () => {
  let service: Experimental3759Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3759Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
