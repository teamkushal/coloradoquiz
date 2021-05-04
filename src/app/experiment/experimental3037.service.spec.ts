import { TestBed } from '@angular/core/testing';

import { Experimental3037Service } from './experimental3037.service';

describe('Experimental3037Service', () => {
  let service: Experimental3037Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3037Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
