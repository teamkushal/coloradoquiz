import { TestBed } from '@angular/core/testing';

import { Experimental222Service } from './experimental222.service';

describe('Experimental222Service', () => {
  let service: Experimental222Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental222Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
