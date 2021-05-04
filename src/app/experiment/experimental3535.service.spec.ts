import { TestBed } from '@angular/core/testing';

import { Experimental3535Service } from './experimental3535.service';

describe('Experimental3535Service', () => {
  let service: Experimental3535Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3535Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
