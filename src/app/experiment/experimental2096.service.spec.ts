import { TestBed } from '@angular/core/testing';

import { Experimental2096Service } from './experimental2096.service';

describe('Experimental2096Service', () => {
  let service: Experimental2096Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2096Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
