import { TestBed } from '@angular/core/testing';

import { Experimental320Service } from './experimental320.service';

describe('Experimental320Service', () => {
  let service: Experimental320Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental320Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
