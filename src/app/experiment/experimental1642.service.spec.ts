import { TestBed } from '@angular/core/testing';

import { Experimental1642Service } from './experimental1642.service';

describe('Experimental1642Service', () => {
  let service: Experimental1642Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1642Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
