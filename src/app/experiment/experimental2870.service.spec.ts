import { TestBed } from '@angular/core/testing';

import { Experimental2870Service } from './experimental2870.service';

describe('Experimental2870Service', () => {
  let service: Experimental2870Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2870Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
