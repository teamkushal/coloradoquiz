import { TestBed } from '@angular/core/testing';

import { Experimental1342Service } from './experimental1342.service';

describe('Experimental1342Service', () => {
  let service: Experimental1342Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1342Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
