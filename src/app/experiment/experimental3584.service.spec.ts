import { TestBed } from '@angular/core/testing';

import { Experimental3584Service } from './experimental3584.service';

describe('Experimental3584Service', () => {
  let service: Experimental3584Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3584Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
