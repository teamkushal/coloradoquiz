import { TestBed } from '@angular/core/testing';

import { Experimental681Service } from './experimental681.service';

describe('Experimental681Service', () => {
  let service: Experimental681Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental681Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
