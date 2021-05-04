import { TestBed } from '@angular/core/testing';

import { Experimental3167Service } from './experimental3167.service';

describe('Experimental3167Service', () => {
  let service: Experimental3167Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3167Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
