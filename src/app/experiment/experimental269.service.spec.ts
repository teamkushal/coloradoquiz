import { TestBed } from '@angular/core/testing';

import { Experimental269Service } from './experimental269.service';

describe('Experimental269Service', () => {
  let service: Experimental269Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental269Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
