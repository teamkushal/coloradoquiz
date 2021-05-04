import { TestBed } from '@angular/core/testing';

import { Experimental3546Service } from './experimental3546.service';

describe('Experimental3546Service', () => {
  let service: Experimental3546Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3546Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
