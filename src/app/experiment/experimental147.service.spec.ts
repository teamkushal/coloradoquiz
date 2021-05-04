import { TestBed } from '@angular/core/testing';

import { Experimental147Service } from './experimental147.service';

describe('Experimental147Service', () => {
  let service: Experimental147Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental147Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
