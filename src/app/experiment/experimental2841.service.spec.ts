import { TestBed } from '@angular/core/testing';

import { Experimental2841Service } from './experimental2841.service';

describe('Experimental2841Service', () => {
  let service: Experimental2841Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2841Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
