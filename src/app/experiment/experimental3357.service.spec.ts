import { TestBed } from '@angular/core/testing';

import { Experimental3357Service } from './experimental3357.service';

describe('Experimental3357Service', () => {
  let service: Experimental3357Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3357Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
