import { TestBed } from '@angular/core/testing';

import { Experimental865Service } from './experimental865.service';

describe('Experimental865Service', () => {
  let service: Experimental865Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental865Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
