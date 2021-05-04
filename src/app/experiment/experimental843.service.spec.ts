import { TestBed } from '@angular/core/testing';

import { Experimental843Service } from './experimental843.service';

describe('Experimental843Service', () => {
  let service: Experimental843Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental843Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
