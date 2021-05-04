import { TestBed } from '@angular/core/testing';

import { Experimental3789Service } from './experimental3789.service';

describe('Experimental3789Service', () => {
  let service: Experimental3789Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3789Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
