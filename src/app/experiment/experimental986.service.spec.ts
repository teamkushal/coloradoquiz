import { TestBed } from '@angular/core/testing';

import { Experimental986Service } from './experimental986.service';

describe('Experimental986Service', () => {
  let service: Experimental986Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental986Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
