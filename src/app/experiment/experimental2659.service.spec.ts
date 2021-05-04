import { TestBed } from '@angular/core/testing';

import { Experimental2659Service } from './experimental2659.service';

describe('Experimental2659Service', () => {
  let service: Experimental2659Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2659Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
