import { TestBed } from '@angular/core/testing';

import { Experimental238Service } from './experimental238.service';

describe('Experimental238Service', () => {
  let service: Experimental238Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental238Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
