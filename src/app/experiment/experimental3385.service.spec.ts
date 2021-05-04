import { TestBed } from '@angular/core/testing';

import { Experimental3385Service } from './experimental3385.service';

describe('Experimental3385Service', () => {
  let service: Experimental3385Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3385Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
