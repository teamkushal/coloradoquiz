import { TestBed } from '@angular/core/testing';

import { Experimental1813Service } from './experimental1813.service';

describe('Experimental1813Service', () => {
  let service: Experimental1813Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1813Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
