import { TestBed } from '@angular/core/testing';

import { Experimental1324Service } from './experimental1324.service';

describe('Experimental1324Service', () => {
  let service: Experimental1324Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1324Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
