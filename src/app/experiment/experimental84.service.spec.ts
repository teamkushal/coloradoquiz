import { TestBed } from '@angular/core/testing';

import { Experimental84Service } from './experimental84.service';

describe('Experimental84Service', () => {
  let service: Experimental84Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental84Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
