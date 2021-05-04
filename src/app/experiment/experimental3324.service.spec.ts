import { TestBed } from '@angular/core/testing';

import { Experimental3324Service } from './experimental3324.service';

describe('Experimental3324Service', () => {
  let service: Experimental3324Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3324Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
