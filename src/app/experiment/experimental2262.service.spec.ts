import { TestBed } from '@angular/core/testing';

import { Experimental2262Service } from './experimental2262.service';

describe('Experimental2262Service', () => {
  let service: Experimental2262Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2262Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
