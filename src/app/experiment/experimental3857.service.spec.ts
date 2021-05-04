import { TestBed } from '@angular/core/testing';

import { Experimental3857Service } from './experimental3857.service';

describe('Experimental3857Service', () => {
  let service: Experimental3857Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3857Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
