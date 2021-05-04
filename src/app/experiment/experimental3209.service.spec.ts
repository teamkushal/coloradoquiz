import { TestBed } from '@angular/core/testing';

import { Experimental3209Service } from './experimental3209.service';

describe('Experimental3209Service', () => {
  let service: Experimental3209Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3209Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
