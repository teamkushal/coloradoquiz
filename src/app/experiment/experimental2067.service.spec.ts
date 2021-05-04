import { TestBed } from '@angular/core/testing';

import { Experimental2067Service } from './experimental2067.service';

describe('Experimental2067Service', () => {
  let service: Experimental2067Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2067Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
