import { TestBed } from '@angular/core/testing';

import { Experimental3682Service } from './experimental3682.service';

describe('Experimental3682Service', () => {
  let service: Experimental3682Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3682Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
