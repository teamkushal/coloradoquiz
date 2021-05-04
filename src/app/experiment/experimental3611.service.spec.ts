import { TestBed } from '@angular/core/testing';

import { Experimental3611Service } from './experimental3611.service';

describe('Experimental3611Service', () => {
  let service: Experimental3611Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3611Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
