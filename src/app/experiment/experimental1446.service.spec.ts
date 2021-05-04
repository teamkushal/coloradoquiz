import { TestBed } from '@angular/core/testing';

import { Experimental1446Service } from './experimental1446.service';

describe('Experimental1446Service', () => {
  let service: Experimental1446Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1446Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
