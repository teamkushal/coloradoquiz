import { TestBed } from '@angular/core/testing';

import { Experimental167Service } from './experimental167.service';

describe('Experimental167Service', () => {
  let service: Experimental167Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental167Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
