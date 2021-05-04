import { TestBed } from '@angular/core/testing';

import { Experimental2130Service } from './experimental2130.service';

describe('Experimental2130Service', () => {
  let service: Experimental2130Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2130Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
