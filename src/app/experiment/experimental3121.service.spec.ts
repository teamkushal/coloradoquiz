import { TestBed } from '@angular/core/testing';

import { Experimental3121Service } from './experimental3121.service';

describe('Experimental3121Service', () => {
  let service: Experimental3121Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3121Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
