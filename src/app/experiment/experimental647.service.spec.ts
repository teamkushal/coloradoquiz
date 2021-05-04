import { TestBed } from '@angular/core/testing';

import { Experimental647Service } from './experimental647.service';

describe('Experimental647Service', () => {
  let service: Experimental647Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental647Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
