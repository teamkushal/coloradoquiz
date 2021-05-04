import { TestBed } from '@angular/core/testing';

import { Experimental2401Service } from './experimental2401.service';

describe('Experimental2401Service', () => {
  let service: Experimental2401Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2401Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
