import { TestBed } from '@angular/core/testing';

import { Experimental170Service } from './experimental170.service';

describe('Experimental170Service', () => {
  let service: Experimental170Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental170Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
