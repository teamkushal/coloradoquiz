import { TestBed } from '@angular/core/testing';

import { Experimental750Service } from './experimental750.service';

describe('Experimental750Service', () => {
  let service: Experimental750Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental750Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
