import { TestBed } from '@angular/core/testing';

import { Experimental3194Service } from './experimental3194.service';

describe('Experimental3194Service', () => {
  let service: Experimental3194Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3194Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
