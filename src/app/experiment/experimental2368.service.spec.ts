import { TestBed } from '@angular/core/testing';

import { Experimental2368Service } from './experimental2368.service';

describe('Experimental2368Service', () => {
  let service: Experimental2368Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2368Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
