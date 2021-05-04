import { TestBed } from '@angular/core/testing';

import { Experimental1119Service } from './experimental1119.service';

describe('Experimental1119Service', () => {
  let service: Experimental1119Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1119Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
