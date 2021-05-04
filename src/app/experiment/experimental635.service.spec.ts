import { TestBed } from '@angular/core/testing';

import { Experimental635Service } from './experimental635.service';

describe('Experimental635Service', () => {
  let service: Experimental635Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental635Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
