import { TestBed } from '@angular/core/testing';

import { Experimental889Service } from './experimental889.service';

describe('Experimental889Service', () => {
  let service: Experimental889Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental889Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
