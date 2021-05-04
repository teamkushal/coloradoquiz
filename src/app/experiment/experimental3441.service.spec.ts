import { TestBed } from '@angular/core/testing';

import { Experimental3441Service } from './experimental3441.service';

describe('Experimental3441Service', () => {
  let service: Experimental3441Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3441Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
