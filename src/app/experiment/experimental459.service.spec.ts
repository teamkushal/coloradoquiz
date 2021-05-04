import { TestBed } from '@angular/core/testing';

import { Experimental459Service } from './experimental459.service';

describe('Experimental459Service', () => {
  let service: Experimental459Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental459Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
