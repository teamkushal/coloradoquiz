import { TestBed } from '@angular/core/testing';

import { Experimental3189Service } from './experimental3189.service';

describe('Experimental3189Service', () => {
  let service: Experimental3189Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3189Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
