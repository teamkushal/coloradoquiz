import { TestBed } from '@angular/core/testing';

import { Experimental623Service } from './experimental623.service';

describe('Experimental623Service', () => {
  let service: Experimental623Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental623Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
