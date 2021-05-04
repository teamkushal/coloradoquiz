import { TestBed } from '@angular/core/testing';

import { Experimental3019Service } from './experimental3019.service';

describe('Experimental3019Service', () => {
  let service: Experimental3019Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3019Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
