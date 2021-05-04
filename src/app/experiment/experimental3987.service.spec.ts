import { TestBed } from '@angular/core/testing';

import { Experimental3987Service } from './experimental3987.service';

describe('Experimental3987Service', () => {
  let service: Experimental3987Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3987Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
