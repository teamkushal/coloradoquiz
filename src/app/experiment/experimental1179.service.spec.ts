import { TestBed } from '@angular/core/testing';

import { Experimental1179Service } from './experimental1179.service';

describe('Experimental1179Service', () => {
  let service: Experimental1179Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1179Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
