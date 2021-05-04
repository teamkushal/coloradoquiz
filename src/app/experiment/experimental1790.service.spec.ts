import { TestBed } from '@angular/core/testing';

import { Experimental1790Service } from './experimental1790.service';

describe('Experimental1790Service', () => {
  let service: Experimental1790Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1790Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
