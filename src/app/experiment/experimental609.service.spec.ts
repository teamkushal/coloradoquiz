import { TestBed } from '@angular/core/testing';

import { Experimental609Service } from './experimental609.service';

describe('Experimental609Service', () => {
  let service: Experimental609Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental609Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
