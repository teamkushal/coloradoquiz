import { TestBed } from '@angular/core/testing';

import { Experimental497Service } from './experimental497.service';

describe('Experimental497Service', () => {
  let service: Experimental497Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental497Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
