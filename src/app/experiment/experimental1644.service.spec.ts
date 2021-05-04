import { TestBed } from '@angular/core/testing';

import { Experimental1644Service } from './experimental1644.service';

describe('Experimental1644Service', () => {
  let service: Experimental1644Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1644Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
