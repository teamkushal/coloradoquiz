import { TestBed } from '@angular/core/testing';

import { Experimental978Service } from './experimental978.service';

describe('Experimental978Service', () => {
  let service: Experimental978Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental978Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
