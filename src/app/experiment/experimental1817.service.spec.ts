import { TestBed } from '@angular/core/testing';

import { Experimental1817Service } from './experimental1817.service';

describe('Experimental1817Service', () => {
  let service: Experimental1817Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1817Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
