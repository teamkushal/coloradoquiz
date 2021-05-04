import { TestBed } from '@angular/core/testing';

import { Experimental2966Service } from './experimental2966.service';

describe('Experimental2966Service', () => {
  let service: Experimental2966Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2966Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
