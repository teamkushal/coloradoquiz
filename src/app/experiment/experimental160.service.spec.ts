import { TestBed } from '@angular/core/testing';

import { Experimental160Service } from './experimental160.service';

describe('Experimental160Service', () => {
  let service: Experimental160Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental160Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
