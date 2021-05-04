import { TestBed } from '@angular/core/testing';

import { Experimental2204Service } from './experimental2204.service';

describe('Experimental2204Service', () => {
  let service: Experimental2204Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2204Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
