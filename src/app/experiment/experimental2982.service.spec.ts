import { TestBed } from '@angular/core/testing';

import { Experimental2982Service } from './experimental2982.service';

describe('Experimental2982Service', () => {
  let service: Experimental2982Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2982Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
