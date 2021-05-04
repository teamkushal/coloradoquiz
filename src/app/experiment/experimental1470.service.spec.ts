import { TestBed } from '@angular/core/testing';

import { Experimental1470Service } from './experimental1470.service';

describe('Experimental1470Service', () => {
  let service: Experimental1470Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1470Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
