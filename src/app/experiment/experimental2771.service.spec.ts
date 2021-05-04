import { TestBed } from '@angular/core/testing';

import { Experimental2771Service } from './experimental2771.service';

describe('Experimental2771Service', () => {
  let service: Experimental2771Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2771Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
