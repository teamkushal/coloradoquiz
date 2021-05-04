import { TestBed } from '@angular/core/testing';

import { Experimental217Service } from './experimental217.service';

describe('Experimental217Service', () => {
  let service: Experimental217Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental217Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
