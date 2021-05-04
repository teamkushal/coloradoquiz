import { TestBed } from '@angular/core/testing';

import { Experimental3371Service } from './experimental3371.service';

describe('Experimental3371Service', () => {
  let service: Experimental3371Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3371Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
