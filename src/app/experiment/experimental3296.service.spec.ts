import { TestBed } from '@angular/core/testing';

import { Experimental3296Service } from './experimental3296.service';

describe('Experimental3296Service', () => {
  let service: Experimental3296Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3296Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
