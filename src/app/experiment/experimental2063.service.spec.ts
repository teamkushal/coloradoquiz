import { TestBed } from '@angular/core/testing';

import { Experimental2063Service } from './experimental2063.service';

describe('Experimental2063Service', () => {
  let service: Experimental2063Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2063Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
