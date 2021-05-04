import { TestBed } from '@angular/core/testing';

import { Experimental810Service } from './experimental810.service';

describe('Experimental810Service', () => {
  let service: Experimental810Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental810Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
