import { TestBed } from '@angular/core/testing';

import { Experimental90Service } from './experimental90.service';

describe('Experimental90Service', () => {
  let service: Experimental90Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental90Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
