import { TestBed } from '@angular/core/testing';

import { Experimental1831Service } from './experimental1831.service';

describe('Experimental1831Service', () => {
  let service: Experimental1831Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1831Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
