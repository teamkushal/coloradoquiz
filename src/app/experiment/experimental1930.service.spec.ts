import { TestBed } from '@angular/core/testing';

import { Experimental1930Service } from './experimental1930.service';

describe('Experimental1930Service', () => {
  let service: Experimental1930Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1930Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
