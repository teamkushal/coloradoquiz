import { TestBed } from '@angular/core/testing';

import { Experimental2793Service } from './experimental2793.service';

describe('Experimental2793Service', () => {
  let service: Experimental2793Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2793Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
