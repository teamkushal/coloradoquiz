import { TestBed } from '@angular/core/testing';

import { Experimental804Service } from './experimental804.service';

describe('Experimental804Service', () => {
  let service: Experimental804Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental804Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
