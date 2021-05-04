import { TestBed } from '@angular/core/testing';

import { Experimental1022Service } from './experimental1022.service';

describe('Experimental1022Service', () => {
  let service: Experimental1022Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1022Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
