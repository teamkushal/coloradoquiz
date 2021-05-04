import { TestBed } from '@angular/core/testing';

import { Experimental235Service } from './experimental235.service';

describe('Experimental235Service', () => {
  let service: Experimental235Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental235Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
