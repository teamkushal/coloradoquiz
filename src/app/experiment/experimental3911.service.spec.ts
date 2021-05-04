import { TestBed } from '@angular/core/testing';

import { Experimental3911Service } from './experimental3911.service';

describe('Experimental3911Service', () => {
  let service: Experimental3911Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3911Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
