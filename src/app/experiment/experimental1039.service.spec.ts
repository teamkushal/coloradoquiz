import { TestBed } from '@angular/core/testing';

import { Experimental1039Service } from './experimental1039.service';

describe('Experimental1039Service', () => {
  let service: Experimental1039Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1039Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
