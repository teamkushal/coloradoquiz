import { TestBed } from '@angular/core/testing';

import { Experimental2020Service } from './experimental2020.service';

describe('Experimental2020Service', () => {
  let service: Experimental2020Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2020Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
