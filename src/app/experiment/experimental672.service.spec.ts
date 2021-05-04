import { TestBed } from '@angular/core/testing';

import { Experimental672Service } from './experimental672.service';

describe('Experimental672Service', () => {
  let service: Experimental672Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental672Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
