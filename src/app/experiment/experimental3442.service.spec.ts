import { TestBed } from '@angular/core/testing';

import { Experimental3442Service } from './experimental3442.service';

describe('Experimental3442Service', () => {
  let service: Experimental3442Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3442Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
