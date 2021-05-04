import { TestBed } from '@angular/core/testing';

import { Experimental3065Service } from './experimental3065.service';

describe('Experimental3065Service', () => {
  let service: Experimental3065Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3065Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
