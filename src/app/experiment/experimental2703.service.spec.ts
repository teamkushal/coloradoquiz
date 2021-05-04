import { TestBed } from '@angular/core/testing';

import { Experimental2703Service } from './experimental2703.service';

describe('Experimental2703Service', () => {
  let service: Experimental2703Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2703Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
