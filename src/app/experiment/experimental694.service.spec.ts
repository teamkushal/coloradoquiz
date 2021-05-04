import { TestBed } from '@angular/core/testing';

import { Experimental694Service } from './experimental694.service';

describe('Experimental694Service', () => {
  let service: Experimental694Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental694Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
