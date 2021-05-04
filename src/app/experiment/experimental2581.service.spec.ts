import { TestBed } from '@angular/core/testing';

import { Experimental2581Service } from './experimental2581.service';

describe('Experimental2581Service', () => {
  let service: Experimental2581Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2581Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
