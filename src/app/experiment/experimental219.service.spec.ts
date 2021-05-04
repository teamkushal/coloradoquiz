import { TestBed } from '@angular/core/testing';

import { Experimental219Service } from './experimental219.service';

describe('Experimental219Service', () => {
  let service: Experimental219Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental219Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
