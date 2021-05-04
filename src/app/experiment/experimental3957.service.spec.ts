import { TestBed } from '@angular/core/testing';

import { Experimental3957Service } from './experimental3957.service';

describe('Experimental3957Service', () => {
  let service: Experimental3957Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3957Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
