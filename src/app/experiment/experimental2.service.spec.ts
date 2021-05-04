import { TestBed } from '@angular/core/testing';

import { Experimental2Service } from './experimental2.service';

describe('Experimental2Service', () => {
  let service: Experimental2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
