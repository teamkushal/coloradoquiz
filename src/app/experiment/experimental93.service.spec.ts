import { TestBed } from '@angular/core/testing';

import { Experimental93Service } from './experimental93.service';

describe('Experimental93Service', () => {
  let service: Experimental93Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental93Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
