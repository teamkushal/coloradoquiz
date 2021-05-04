import { TestBed } from '@angular/core/testing';

import { Experimental2713Service } from './experimental2713.service';

describe('Experimental2713Service', () => {
  let service: Experimental2713Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2713Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
