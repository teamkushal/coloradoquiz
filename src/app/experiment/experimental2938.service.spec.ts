import { TestBed } from '@angular/core/testing';

import { Experimental2938Service } from './experimental2938.service';

describe('Experimental2938Service', () => {
  let service: Experimental2938Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2938Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
