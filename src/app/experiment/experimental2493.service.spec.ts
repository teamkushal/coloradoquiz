import { TestBed } from '@angular/core/testing';

import { Experimental2493Service } from './experimental2493.service';

describe('Experimental2493Service', () => {
  let service: Experimental2493Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2493Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
