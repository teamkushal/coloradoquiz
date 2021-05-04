import { TestBed } from '@angular/core/testing';

import { Experimental36Service } from './experimental36.service';

describe('Experimental36Service', () => {
  let service: Experimental36Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental36Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
