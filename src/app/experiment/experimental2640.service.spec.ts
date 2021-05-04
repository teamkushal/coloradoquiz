import { TestBed } from '@angular/core/testing';

import { Experimental2640Service } from './experimental2640.service';

describe('Experimental2640Service', () => {
  let service: Experimental2640Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2640Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
