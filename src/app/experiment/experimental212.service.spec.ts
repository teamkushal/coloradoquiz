import { TestBed } from '@angular/core/testing';

import { Experimental212Service } from './experimental212.service';

describe('Experimental212Service', () => {
  let service: Experimental212Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental212Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
