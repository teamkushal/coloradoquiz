import { TestBed } from '@angular/core/testing';

import { Experimental2001Service } from './experimental2001.service';

describe('Experimental2001Service', () => {
  let service: Experimental2001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
