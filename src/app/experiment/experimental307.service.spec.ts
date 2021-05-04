import { TestBed } from '@angular/core/testing';

import { Experimental307Service } from './experimental307.service';

describe('Experimental307Service', () => {
  let service: Experimental307Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental307Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
