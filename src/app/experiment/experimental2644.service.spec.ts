import { TestBed } from '@angular/core/testing';

import { Experimental2644Service } from './experimental2644.service';

describe('Experimental2644Service', () => {
  let service: Experimental2644Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2644Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
