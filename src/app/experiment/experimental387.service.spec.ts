import { TestBed } from '@angular/core/testing';

import { Experimental387Service } from './experimental387.service';

describe('Experimental387Service', () => {
  let service: Experimental387Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental387Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
