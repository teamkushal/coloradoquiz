import { TestBed } from '@angular/core/testing';

import { Experimental1593Service } from './experimental1593.service';

describe('Experimental1593Service', () => {
  let service: Experimental1593Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1593Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
