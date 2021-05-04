import { TestBed } from '@angular/core/testing';

import { Experimental3231Service } from './experimental3231.service';

describe('Experimental3231Service', () => {
  let service: Experimental3231Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3231Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
