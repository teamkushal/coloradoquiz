import { TestBed } from '@angular/core/testing';

import { Experimental494Service } from './experimental494.service';

describe('Experimental494Service', () => {
  let service: Experimental494Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental494Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
