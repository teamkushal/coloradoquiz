import { TestBed } from '@angular/core/testing';

import { Experimental2848Service } from './experimental2848.service';

describe('Experimental2848Service', () => {
  let service: Experimental2848Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2848Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
