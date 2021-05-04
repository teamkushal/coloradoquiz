import { TestBed } from '@angular/core/testing';

import { Experimental578Service } from './experimental578.service';

describe('Experimental578Service', () => {
  let service: Experimental578Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental578Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
