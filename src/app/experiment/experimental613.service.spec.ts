import { TestBed } from '@angular/core/testing';

import { Experimental613Service } from './experimental613.service';

describe('Experimental613Service', () => {
  let service: Experimental613Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental613Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
