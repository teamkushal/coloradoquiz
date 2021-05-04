import { TestBed } from '@angular/core/testing';

import { Experimental2595Service } from './experimental2595.service';

describe('Experimental2595Service', () => {
  let service: Experimental2595Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2595Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
