import { TestBed } from '@angular/core/testing';

import { Experimental1520Service } from './experimental1520.service';

describe('Experimental1520Service', () => {
  let service: Experimental1520Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1520Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
