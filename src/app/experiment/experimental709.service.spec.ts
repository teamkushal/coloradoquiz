import { TestBed } from '@angular/core/testing';

import { Experimental709Service } from './experimental709.service';

describe('Experimental709Service', () => {
  let service: Experimental709Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental709Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
