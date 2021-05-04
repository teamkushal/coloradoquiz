import { TestBed } from '@angular/core/testing';

import { Experimental2997Service } from './experimental2997.service';

describe('Experimental2997Service', () => {
  let service: Experimental2997Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2997Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
