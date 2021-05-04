import { TestBed } from '@angular/core/testing';

import { Experimental279Service } from './experimental279.service';

describe('Experimental279Service', () => {
  let service: Experimental279Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental279Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
