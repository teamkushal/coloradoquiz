import { TestBed } from '@angular/core/testing';

import { Experimental1762Service } from './experimental1762.service';

describe('Experimental1762Service', () => {
  let service: Experimental1762Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1762Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
