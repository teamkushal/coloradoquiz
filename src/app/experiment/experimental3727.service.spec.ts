import { TestBed } from '@angular/core/testing';

import { Experimental3727Service } from './experimental3727.service';

describe('Experimental3727Service', () => {
  let service: Experimental3727Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3727Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
