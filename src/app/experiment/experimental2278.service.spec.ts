import { TestBed } from '@angular/core/testing';

import { Experimental2278Service } from './experimental2278.service';

describe('Experimental2278Service', () => {
  let service: Experimental2278Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2278Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
