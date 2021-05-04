import { TestBed } from '@angular/core/testing';

import { Experimental2583Service } from './experimental2583.service';

describe('Experimental2583Service', () => {
  let service: Experimental2583Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2583Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
