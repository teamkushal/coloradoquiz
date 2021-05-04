import { TestBed } from '@angular/core/testing';

import { Experimental701Service } from './experimental701.service';

describe('Experimental701Service', () => {
  let service: Experimental701Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental701Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
