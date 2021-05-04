import { TestBed } from '@angular/core/testing';

import { Experimental2061Service } from './experimental2061.service';

describe('Experimental2061Service', () => {
  let service: Experimental2061Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2061Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
