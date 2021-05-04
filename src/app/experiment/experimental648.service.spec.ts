import { TestBed } from '@angular/core/testing';

import { Experimental648Service } from './experimental648.service';

describe('Experimental648Service', () => {
  let service: Experimental648Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental648Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
