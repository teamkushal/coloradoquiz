import { TestBed } from '@angular/core/testing';

import { Experimental683Service } from './experimental683.service';

describe('Experimental683Service', () => {
  let service: Experimental683Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental683Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
