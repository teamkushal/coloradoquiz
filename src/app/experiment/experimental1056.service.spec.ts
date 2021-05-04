import { TestBed } from '@angular/core/testing';

import { Experimental1056Service } from './experimental1056.service';

describe('Experimental1056Service', () => {
  let service: Experimental1056Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1056Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
