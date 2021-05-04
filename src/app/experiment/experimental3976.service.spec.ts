import { TestBed } from '@angular/core/testing';

import { Experimental3976Service } from './experimental3976.service';

describe('Experimental3976Service', () => {
  let service: Experimental3976Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3976Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
