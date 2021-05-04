import { TestBed } from '@angular/core/testing';

import { Experimental3029Service } from './experimental3029.service';

describe('Experimental3029Service', () => {
  let service: Experimental3029Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3029Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
