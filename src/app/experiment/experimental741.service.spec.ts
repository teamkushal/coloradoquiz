import { TestBed } from '@angular/core/testing';

import { Experimental741Service } from './experimental741.service';

describe('Experimental741Service', () => {
  let service: Experimental741Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental741Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
