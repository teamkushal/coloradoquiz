import { TestBed } from '@angular/core/testing';

import { Experimental905Service } from './experimental905.service';

describe('Experimental905Service', () => {
  let service: Experimental905Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental905Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
