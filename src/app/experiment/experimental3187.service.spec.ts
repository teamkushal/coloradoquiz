import { TestBed } from '@angular/core/testing';

import { Experimental3187Service } from './experimental3187.service';

describe('Experimental3187Service', () => {
  let service: Experimental3187Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3187Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
