import { TestBed } from '@angular/core/testing';

import { Experimental1619Service } from './experimental1619.service';

describe('Experimental1619Service', () => {
  let service: Experimental1619Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1619Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
