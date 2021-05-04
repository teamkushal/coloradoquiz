import { TestBed } from '@angular/core/testing';

import { Experimental2091Service } from './experimental2091.service';

describe('Experimental2091Service', () => {
  let service: Experimental2091Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2091Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
