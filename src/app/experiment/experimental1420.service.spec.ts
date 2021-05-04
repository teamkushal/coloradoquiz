import { TestBed } from '@angular/core/testing';

import { Experimental1420Service } from './experimental1420.service';

describe('Experimental1420Service', () => {
  let service: Experimental1420Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1420Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
