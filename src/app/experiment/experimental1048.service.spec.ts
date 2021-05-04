import { TestBed } from '@angular/core/testing';

import { Experimental1048Service } from './experimental1048.service';

describe('Experimental1048Service', () => {
  let service: Experimental1048Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1048Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
