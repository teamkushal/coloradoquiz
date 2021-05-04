import { TestBed } from '@angular/core/testing';

import { Experimental3641Service } from './experimental3641.service';

describe('Experimental3641Service', () => {
  let service: Experimental3641Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3641Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
