import { TestBed } from '@angular/core/testing';

import { Experimental2054Service } from './experimental2054.service';

describe('Experimental2054Service', () => {
  let service: Experimental2054Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2054Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
