import { TestBed } from '@angular/core/testing';

import { Experimental2071Service } from './experimental2071.service';

describe('Experimental2071Service', () => {
  let service: Experimental2071Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2071Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
