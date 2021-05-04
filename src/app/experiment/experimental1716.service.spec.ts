import { TestBed } from '@angular/core/testing';

import { Experimental1716Service } from './experimental1716.service';

describe('Experimental1716Service', () => {
  let service: Experimental1716Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1716Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
