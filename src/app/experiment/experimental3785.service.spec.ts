import { TestBed } from '@angular/core/testing';

import { Experimental3785Service } from './experimental3785.service';

describe('Experimental3785Service', () => {
  let service: Experimental3785Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3785Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
