import { TestBed } from '@angular/core/testing';

import { Experimental1931Service } from './experimental1931.service';

describe('Experimental1931Service', () => {
  let service: Experimental1931Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1931Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
