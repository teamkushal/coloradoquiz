import { TestBed } from '@angular/core/testing';

import { Experimental463Service } from './experimental463.service';

describe('Experimental463Service', () => {
  let service: Experimental463Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental463Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
