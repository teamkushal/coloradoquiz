import { TestBed } from '@angular/core/testing';

import { Experimental1894Service } from './experimental1894.service';

describe('Experimental1894Service', () => {
  let service: Experimental1894Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1894Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
