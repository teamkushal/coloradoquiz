import { TestBed } from '@angular/core/testing';

import { Experimental3707Service } from './experimental3707.service';

describe('Experimental3707Service', () => {
  let service: Experimental3707Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3707Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
