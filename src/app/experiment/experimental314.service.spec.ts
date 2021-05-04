import { TestBed } from '@angular/core/testing';

import { Experimental314Service } from './experimental314.service';

describe('Experimental314Service', () => {
  let service: Experimental314Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental314Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
