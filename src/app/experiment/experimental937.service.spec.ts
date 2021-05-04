import { TestBed } from '@angular/core/testing';

import { Experimental937Service } from './experimental937.service';

describe('Experimental937Service', () => {
  let service: Experimental937Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental937Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
