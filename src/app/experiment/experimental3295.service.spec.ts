import { TestBed } from '@angular/core/testing';

import { Experimental3295Service } from './experimental3295.service';

describe('Experimental3295Service', () => {
  let service: Experimental3295Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3295Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
