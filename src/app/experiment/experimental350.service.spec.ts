import { TestBed } from '@angular/core/testing';

import { Experimental350Service } from './experimental350.service';

describe('Experimental350Service', () => {
  let service: Experimental350Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental350Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
