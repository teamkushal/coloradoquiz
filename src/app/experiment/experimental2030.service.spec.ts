import { TestBed } from '@angular/core/testing';

import { Experimental2030Service } from './experimental2030.service';

describe('Experimental2030Service', () => {
  let service: Experimental2030Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2030Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
