import { TestBed } from '@angular/core/testing';

import { Experimental898Service } from './experimental898.service';

describe('Experimental898Service', () => {
  let service: Experimental898Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental898Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
