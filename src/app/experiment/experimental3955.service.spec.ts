import { TestBed } from '@angular/core/testing';

import { Experimental3955Service } from './experimental3955.service';

describe('Experimental3955Service', () => {
  let service: Experimental3955Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3955Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
