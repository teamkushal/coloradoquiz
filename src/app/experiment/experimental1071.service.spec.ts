import { TestBed } from '@angular/core/testing';

import { Experimental1071Service } from './experimental1071.service';

describe('Experimental1071Service', () => {
  let service: Experimental1071Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1071Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
