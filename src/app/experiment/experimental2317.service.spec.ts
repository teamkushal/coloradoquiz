import { TestBed } from '@angular/core/testing';

import { Experimental2317Service } from './experimental2317.service';

describe('Experimental2317Service', () => {
  let service: Experimental2317Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2317Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
