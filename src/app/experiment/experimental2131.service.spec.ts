import { TestBed } from '@angular/core/testing';

import { Experimental2131Service } from './experimental2131.service';

describe('Experimental2131Service', () => {
  let service: Experimental2131Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2131Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
