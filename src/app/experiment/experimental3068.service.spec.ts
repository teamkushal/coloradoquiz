import { TestBed } from '@angular/core/testing';

import { Experimental3068Service } from './experimental3068.service';

describe('Experimental3068Service', () => {
  let service: Experimental3068Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3068Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
