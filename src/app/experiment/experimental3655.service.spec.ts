import { TestBed } from '@angular/core/testing';

import { Experimental3655Service } from './experimental3655.service';

describe('Experimental3655Service', () => {
  let service: Experimental3655Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3655Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
