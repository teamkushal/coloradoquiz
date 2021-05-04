import { TestBed } from '@angular/core/testing';

import { Experimental1864Service } from './experimental1864.service';

describe('Experimental1864Service', () => {
  let service: Experimental1864Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1864Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
