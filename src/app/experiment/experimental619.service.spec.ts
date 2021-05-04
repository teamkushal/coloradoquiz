import { TestBed } from '@angular/core/testing';

import { Experimental619Service } from './experimental619.service';

describe('Experimental619Service', () => {
  let service: Experimental619Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental619Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
