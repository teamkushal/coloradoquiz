import { TestBed } from '@angular/core/testing';

import { Experimental207Service } from './experimental207.service';

describe('Experimental207Service', () => {
  let service: Experimental207Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental207Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
