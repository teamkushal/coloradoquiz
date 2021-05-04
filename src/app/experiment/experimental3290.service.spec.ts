import { TestBed } from '@angular/core/testing';

import { Experimental3290Service } from './experimental3290.service';

describe('Experimental3290Service', () => {
  let service: Experimental3290Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3290Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
