import { TestBed } from '@angular/core/testing';

import { Experimental69Service } from './experimental69.service';

describe('Experimental69Service', () => {
  let service: Experimental69Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental69Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
