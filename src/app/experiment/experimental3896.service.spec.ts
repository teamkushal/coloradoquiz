import { TestBed } from '@angular/core/testing';

import { Experimental3896Service } from './experimental3896.service';

describe('Experimental3896Service', () => {
  let service: Experimental3896Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3896Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
