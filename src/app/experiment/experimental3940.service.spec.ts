import { TestBed } from '@angular/core/testing';

import { Experimental3940Service } from './experimental3940.service';

describe('Experimental3940Service', () => {
  let service: Experimental3940Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3940Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
