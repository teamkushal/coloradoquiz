import { TestBed } from '@angular/core/testing';

import { Experimental3577Service } from './experimental3577.service';

describe('Experimental3577Service', () => {
  let service: Experimental3577Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3577Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
