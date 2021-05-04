import { TestBed } from '@angular/core/testing';

import { Experimental418Service } from './experimental418.service';

describe('Experimental418Service', () => {
  let service: Experimental418Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental418Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
