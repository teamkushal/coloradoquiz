import { TestBed } from '@angular/core/testing';

import { Experimental1090Service } from './experimental1090.service';

describe('Experimental1090Service', () => {
  let service: Experimental1090Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1090Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
