import { TestBed } from '@angular/core/testing';

import { Experimental394Service } from './experimental394.service';

describe('Experimental394Service', () => {
  let service: Experimental394Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental394Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
