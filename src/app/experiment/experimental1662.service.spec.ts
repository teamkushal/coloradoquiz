import { TestBed } from '@angular/core/testing';

import { Experimental1662Service } from './experimental1662.service';

describe('Experimental1662Service', () => {
  let service: Experimental1662Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1662Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
