import { TestBed } from '@angular/core/testing';

import { Experimental699Service } from './experimental699.service';

describe('Experimental699Service', () => {
  let service: Experimental699Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental699Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
