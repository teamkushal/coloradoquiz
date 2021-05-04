import { TestBed } from '@angular/core/testing';

import { Experimental3510Service } from './experimental3510.service';

describe('Experimental3510Service', () => {
  let service: Experimental3510Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3510Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
