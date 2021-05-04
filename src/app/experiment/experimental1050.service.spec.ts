import { TestBed } from '@angular/core/testing';

import { Experimental1050Service } from './experimental1050.service';

describe('Experimental1050Service', () => {
  let service: Experimental1050Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1050Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
