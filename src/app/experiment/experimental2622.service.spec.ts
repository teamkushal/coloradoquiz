import { TestBed } from '@angular/core/testing';

import { Experimental2622Service } from './experimental2622.service';

describe('Experimental2622Service', () => {
  let service: Experimental2622Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2622Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
