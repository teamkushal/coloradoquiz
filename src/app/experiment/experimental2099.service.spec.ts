import { TestBed } from '@angular/core/testing';

import { Experimental2099Service } from './experimental2099.service';

describe('Experimental2099Service', () => {
  let service: Experimental2099Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2099Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
