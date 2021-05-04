import { TestBed } from '@angular/core/testing';

import { Experimental2281Service } from './experimental2281.service';

describe('Experimental2281Service', () => {
  let service: Experimental2281Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2281Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
