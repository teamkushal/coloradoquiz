import { TestBed } from '@angular/core/testing';

import { Experimental3566Service } from './experimental3566.service';

describe('Experimental3566Service', () => {
  let service: Experimental3566Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3566Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
