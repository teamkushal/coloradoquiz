import { TestBed } from '@angular/core/testing';

import { Experimental3438Service } from './experimental3438.service';

describe('Experimental3438Service', () => {
  let service: Experimental3438Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3438Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
