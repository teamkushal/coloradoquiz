import { TestBed } from '@angular/core/testing';

import { Experimental848Service } from './experimental848.service';

describe('Experimental848Service', () => {
  let service: Experimental848Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental848Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
