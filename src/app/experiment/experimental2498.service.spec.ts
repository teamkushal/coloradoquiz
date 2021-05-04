import { TestBed } from '@angular/core/testing';

import { Experimental2498Service } from './experimental2498.service';

describe('Experimental2498Service', () => {
  let service: Experimental2498Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2498Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
