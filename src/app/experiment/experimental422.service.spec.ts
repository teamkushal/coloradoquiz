import { TestBed } from '@angular/core/testing';

import { Experimental422Service } from './experimental422.service';

describe('Experimental422Service', () => {
  let service: Experimental422Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental422Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
