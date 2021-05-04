import { TestBed } from '@angular/core/testing';

import { Experimental932Service } from './experimental932.service';

describe('Experimental932Service', () => {
  let service: Experimental932Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental932Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
