import { TestBed } from '@angular/core/testing';

import { Experimental3826Service } from './experimental3826.service';

describe('Experimental3826Service', () => {
  let service: Experimental3826Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3826Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
