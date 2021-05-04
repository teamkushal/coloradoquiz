import { TestBed } from '@angular/core/testing';

import { Experimental2032Service } from './experimental2032.service';

describe('Experimental2032Service', () => {
  let service: Experimental2032Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2032Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
