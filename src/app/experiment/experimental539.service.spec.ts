import { TestBed } from '@angular/core/testing';

import { Experimental539Service } from './experimental539.service';

describe('Experimental539Service', () => {
  let service: Experimental539Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental539Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
