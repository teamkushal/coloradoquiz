import { TestBed } from '@angular/core/testing';

import { Experimental3675Service } from './experimental3675.service';

describe('Experimental3675Service', () => {
  let service: Experimental3675Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3675Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
