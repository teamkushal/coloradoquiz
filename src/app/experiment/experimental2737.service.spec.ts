import { TestBed } from '@angular/core/testing';

import { Experimental2737Service } from './experimental2737.service';

describe('Experimental2737Service', () => {
  let service: Experimental2737Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2737Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
