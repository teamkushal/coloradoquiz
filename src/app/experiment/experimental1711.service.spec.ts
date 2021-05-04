import { TestBed } from '@angular/core/testing';

import { Experimental1711Service } from './experimental1711.service';

describe('Experimental1711Service', () => {
  let service: Experimental1711Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1711Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
