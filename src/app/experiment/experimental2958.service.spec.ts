import { TestBed } from '@angular/core/testing';

import { Experimental2958Service } from './experimental2958.service';

describe('Experimental2958Service', () => {
  let service: Experimental2958Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2958Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
