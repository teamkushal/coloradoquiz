import { TestBed } from '@angular/core/testing';

import { Experimental3219Service } from './experimental3219.service';

describe('Experimental3219Service', () => {
  let service: Experimental3219Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3219Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
