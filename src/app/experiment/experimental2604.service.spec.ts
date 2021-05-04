import { TestBed } from '@angular/core/testing';

import { Experimental2604Service } from './experimental2604.service';

describe('Experimental2604Service', () => {
  let service: Experimental2604Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2604Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
