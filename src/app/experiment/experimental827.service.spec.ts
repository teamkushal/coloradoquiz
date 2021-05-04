import { TestBed } from '@angular/core/testing';

import { Experimental827Service } from './experimental827.service';

describe('Experimental827Service', () => {
  let service: Experimental827Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental827Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
