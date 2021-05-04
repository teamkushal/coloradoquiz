import { TestBed } from '@angular/core/testing';

import { Experimental3841Service } from './experimental3841.service';

describe('Experimental3841Service', () => {
  let service: Experimental3841Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3841Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
