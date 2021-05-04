import { TestBed } from '@angular/core/testing';

import { Experimental3595Service } from './experimental3595.service';

describe('Experimental3595Service', () => {
  let service: Experimental3595Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3595Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
