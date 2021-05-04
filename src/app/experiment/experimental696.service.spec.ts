import { TestBed } from '@angular/core/testing';

import { Experimental696Service } from './experimental696.service';

describe('Experimental696Service', () => {
  let service: Experimental696Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental696Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
