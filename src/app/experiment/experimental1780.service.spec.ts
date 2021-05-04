import { TestBed } from '@angular/core/testing';

import { Experimental1780Service } from './experimental1780.service';

describe('Experimental1780Service', () => {
  let service: Experimental1780Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1780Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
