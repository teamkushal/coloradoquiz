import { TestBed } from '@angular/core/testing';

import { Experimental2839Service } from './experimental2839.service';

describe('Experimental2839Service', () => {
  let service: Experimental2839Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2839Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
