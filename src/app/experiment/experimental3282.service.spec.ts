import { TestBed } from '@angular/core/testing';

import { Experimental3282Service } from './experimental3282.service';

describe('Experimental3282Service', () => {
  let service: Experimental3282Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3282Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
