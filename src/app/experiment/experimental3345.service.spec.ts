import { TestBed } from '@angular/core/testing';

import { Experimental3345Service } from './experimental3345.service';

describe('Experimental3345Service', () => {
  let service: Experimental3345Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3345Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
