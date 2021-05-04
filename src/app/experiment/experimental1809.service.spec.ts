import { TestBed } from '@angular/core/testing';

import { Experimental1809Service } from './experimental1809.service';

describe('Experimental1809Service', () => {
  let service: Experimental1809Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1809Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
