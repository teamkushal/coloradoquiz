import { TestBed } from '@angular/core/testing';

import { Experimental318Service } from './experimental318.service';

describe('Experimental318Service', () => {
  let service: Experimental318Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental318Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
