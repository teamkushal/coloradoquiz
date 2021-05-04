import { TestBed } from '@angular/core/testing';

import { Experimental486Service } from './experimental486.service';

describe('Experimental486Service', () => {
  let service: Experimental486Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental486Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
