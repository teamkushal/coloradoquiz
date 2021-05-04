import { TestBed } from '@angular/core/testing';

import { Experimental934Service } from './experimental934.service';

describe('Experimental934Service', () => {
  let service: Experimental934Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental934Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
