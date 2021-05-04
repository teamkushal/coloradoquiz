import { TestBed } from '@angular/core/testing';

import { Experimental3314Service } from './experimental3314.service';

describe('Experimental3314Service', () => {
  let service: Experimental3314Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3314Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
