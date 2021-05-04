import { TestBed } from '@angular/core/testing';

import { Experimental522Service } from './experimental522.service';

describe('Experimental522Service', () => {
  let service: Experimental522Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental522Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
