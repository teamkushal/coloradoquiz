import { TestBed } from '@angular/core/testing';

import { Experimental1582Service } from './experimental1582.service';

describe('Experimental1582Service', () => {
  let service: Experimental1582Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1582Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
