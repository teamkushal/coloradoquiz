import { TestBed } from '@angular/core/testing';

import { Experimental1721Service } from './experimental1721.service';

describe('Experimental1721Service', () => {
  let service: Experimental1721Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1721Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
