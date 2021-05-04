import { TestBed } from '@angular/core/testing';

import { Experimental984Service } from './experimental984.service';

describe('Experimental984Service', () => {
  let service: Experimental984Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental984Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
