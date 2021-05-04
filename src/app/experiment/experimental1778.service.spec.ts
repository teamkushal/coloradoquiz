import { TestBed } from '@angular/core/testing';

import { Experimental1778Service } from './experimental1778.service';

describe('Experimental1778Service', () => {
  let service: Experimental1778Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1778Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
