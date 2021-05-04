import { TestBed } from '@angular/core/testing';

import { Experimental1398Service } from './experimental1398.service';

describe('Experimental1398Service', () => {
  let service: Experimental1398Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1398Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
