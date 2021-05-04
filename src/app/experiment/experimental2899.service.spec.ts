import { TestBed } from '@angular/core/testing';

import { Experimental2899Service } from './experimental2899.service';

describe('Experimental2899Service', () => {
  let service: Experimental2899Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2899Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
