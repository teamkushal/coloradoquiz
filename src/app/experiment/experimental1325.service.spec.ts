import { TestBed } from '@angular/core/testing';

import { Experimental1325Service } from './experimental1325.service';

describe('Experimental1325Service', () => {
  let service: Experimental1325Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1325Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
