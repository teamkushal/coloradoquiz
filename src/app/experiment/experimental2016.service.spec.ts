import { TestBed } from '@angular/core/testing';

import { Experimental2016Service } from './experimental2016.service';

describe('Experimental2016Service', () => {
  let service: Experimental2016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
