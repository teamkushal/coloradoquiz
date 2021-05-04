import { TestBed } from '@angular/core/testing';

import { Experimental893Service } from './experimental893.service';

describe('Experimental893Service', () => {
  let service: Experimental893Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental893Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
