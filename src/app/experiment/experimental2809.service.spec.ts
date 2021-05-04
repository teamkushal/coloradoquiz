import { TestBed } from '@angular/core/testing';

import { Experimental2809Service } from './experimental2809.service';

describe('Experimental2809Service', () => {
  let service: Experimental2809Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2809Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
