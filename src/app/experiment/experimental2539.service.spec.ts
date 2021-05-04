import { TestBed } from '@angular/core/testing';

import { Experimental2539Service } from './experimental2539.service';

describe('Experimental2539Service', () => {
  let service: Experimental2539Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2539Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
