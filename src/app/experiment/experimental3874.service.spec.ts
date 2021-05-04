import { TestBed } from '@angular/core/testing';

import { Experimental3874Service } from './experimental3874.service';

describe('Experimental3874Service', () => {
  let service: Experimental3874Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3874Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
