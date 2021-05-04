import { TestBed } from '@angular/core/testing';

import { Experimental3930Service } from './experimental3930.service';

describe('Experimental3930Service', () => {
  let service: Experimental3930Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3930Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
