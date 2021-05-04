import { TestBed } from '@angular/core/testing';

import { Experimental717Service } from './experimental717.service';

describe('Experimental717Service', () => {
  let service: Experimental717Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental717Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
