import { TestBed } from '@angular/core/testing';

import { Experimental703Service } from './experimental703.service';

describe('Experimental703Service', () => {
  let service: Experimental703Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental703Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
