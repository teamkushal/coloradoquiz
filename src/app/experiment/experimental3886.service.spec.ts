import { TestBed } from '@angular/core/testing';

import { Experimental3886Service } from './experimental3886.service';

describe('Experimental3886Service', () => {
  let service: Experimental3886Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3886Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
