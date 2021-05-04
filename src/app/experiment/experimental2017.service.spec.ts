import { TestBed } from '@angular/core/testing';

import { Experimental2017Service } from './experimental2017.service';

describe('Experimental2017Service', () => {
  let service: Experimental2017Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2017Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
