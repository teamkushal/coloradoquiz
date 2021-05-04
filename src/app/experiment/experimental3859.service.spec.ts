import { TestBed } from '@angular/core/testing';

import { Experimental3859Service } from './experimental3859.service';

describe('Experimental3859Service', () => {
  let service: Experimental3859Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3859Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
