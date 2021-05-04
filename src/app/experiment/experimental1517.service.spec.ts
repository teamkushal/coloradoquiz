import { TestBed } from '@angular/core/testing';

import { Experimental1517Service } from './experimental1517.service';

describe('Experimental1517Service', () => {
  let service: Experimental1517Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1517Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
