import { TestBed } from '@angular/core/testing';

import { Experimental911Service } from './experimental911.service';

describe('Experimental911Service', () => {
  let service: Experimental911Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental911Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
