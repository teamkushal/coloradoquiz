import { TestBed } from '@angular/core/testing';

import { Experimental5Service } from './experimental5.service';

describe('Experimental5Service', () => {
  let service: Experimental5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
