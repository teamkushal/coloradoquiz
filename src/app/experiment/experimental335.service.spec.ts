import { TestBed } from '@angular/core/testing';

import { Experimental335Service } from './experimental335.service';

describe('Experimental335Service', () => {
  let service: Experimental335Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental335Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
