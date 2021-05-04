import { TestBed } from '@angular/core/testing';

import { Experimental3352Service } from './experimental3352.service';

describe('Experimental3352Service', () => {
  let service: Experimental3352Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3352Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
