import { TestBed } from '@angular/core/testing';

import { Experimental649Service } from './experimental649.service';

describe('Experimental649Service', () => {
  let service: Experimental649Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental649Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
