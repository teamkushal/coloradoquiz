import { TestBed } from '@angular/core/testing';

import { Experimental3828Service } from './experimental3828.service';

describe('Experimental3828Service', () => {
  let service: Experimental3828Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3828Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
