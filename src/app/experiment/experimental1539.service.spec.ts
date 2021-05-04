import { TestBed } from '@angular/core/testing';

import { Experimental1539Service } from './experimental1539.service';

describe('Experimental1539Service', () => {
  let service: Experimental1539Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1539Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
