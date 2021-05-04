import { TestBed } from '@angular/core/testing';

import { Experimental70Service } from './experimental70.service';

describe('Experimental70Service', () => {
  let service: Experimental70Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental70Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
