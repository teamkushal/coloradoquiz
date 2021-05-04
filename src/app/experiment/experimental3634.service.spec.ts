import { TestBed } from '@angular/core/testing';

import { Experimental3634Service } from './experimental3634.service';

describe('Experimental3634Service', () => {
  let service: Experimental3634Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3634Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
