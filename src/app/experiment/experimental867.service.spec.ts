import { TestBed } from '@angular/core/testing';

import { Experimental867Service } from './experimental867.service';

describe('Experimental867Service', () => {
  let service: Experimental867Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental867Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
