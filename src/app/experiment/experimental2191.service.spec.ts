import { TestBed } from '@angular/core/testing';

import { Experimental2191Service } from './experimental2191.service';

describe('Experimental2191Service', () => {
  let service: Experimental2191Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2191Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
