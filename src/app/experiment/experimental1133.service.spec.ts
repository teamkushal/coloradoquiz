import { TestBed } from '@angular/core/testing';

import { Experimental1133Service } from './experimental1133.service';

describe('Experimental1133Service', () => {
  let service: Experimental1133Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1133Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
