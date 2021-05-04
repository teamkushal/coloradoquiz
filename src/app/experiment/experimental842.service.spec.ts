import { TestBed } from '@angular/core/testing';

import { Experimental842Service } from './experimental842.service';

describe('Experimental842Service', () => {
  let service: Experimental842Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental842Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
