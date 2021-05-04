import { TestBed } from '@angular/core/testing';

import { Experimental3956Service } from './experimental3956.service';

describe('Experimental3956Service', () => {
  let service: Experimental3956Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3956Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
