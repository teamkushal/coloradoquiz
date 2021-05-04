import { TestBed } from '@angular/core/testing';

import { Experimental117Service } from './experimental117.service';

describe('Experimental117Service', () => {
  let service: Experimental117Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental117Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
