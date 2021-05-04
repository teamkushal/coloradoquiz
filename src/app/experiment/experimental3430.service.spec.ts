import { TestBed } from '@angular/core/testing';

import { Experimental3430Service } from './experimental3430.service';

describe('Experimental3430Service', () => {
  let service: Experimental3430Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3430Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
