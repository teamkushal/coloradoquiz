import { TestBed } from '@angular/core/testing';

import { Experimental2612Service } from './experimental2612.service';

describe('Experimental2612Service', () => {
  let service: Experimental2612Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2612Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
