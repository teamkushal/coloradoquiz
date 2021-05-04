import { TestBed } from '@angular/core/testing';

import { Experimental226Service } from './experimental226.service';

describe('Experimental226Service', () => {
  let service: Experimental226Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental226Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
