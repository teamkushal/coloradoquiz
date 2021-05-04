import { TestBed } from '@angular/core/testing';

import { Experimental411Service } from './experimental411.service';

describe('Experimental411Service', () => {
  let service: Experimental411Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental411Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
