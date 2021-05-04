import { TestBed } from '@angular/core/testing';

import { Experimental590Service } from './experimental590.service';

describe('Experimental590Service', () => {
  let service: Experimental590Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental590Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
