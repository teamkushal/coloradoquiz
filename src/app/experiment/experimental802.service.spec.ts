import { TestBed } from '@angular/core/testing';

import { Experimental802Service } from './experimental802.service';

describe('Experimental802Service', () => {
  let service: Experimental802Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental802Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
