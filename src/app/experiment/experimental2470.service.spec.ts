import { TestBed } from '@angular/core/testing';

import { Experimental2470Service } from './experimental2470.service';

describe('Experimental2470Service', () => {
  let service: Experimental2470Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2470Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
