import { TestBed } from '@angular/core/testing';

import { Experimental769Service } from './experimental769.service';

describe('Experimental769Service', () => {
  let service: Experimental769Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental769Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
