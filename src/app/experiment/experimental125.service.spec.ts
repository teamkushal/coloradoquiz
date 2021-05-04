import { TestBed } from '@angular/core/testing';

import { Experimental125Service } from './experimental125.service';

describe('Experimental125Service', () => {
  let service: Experimental125Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental125Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
