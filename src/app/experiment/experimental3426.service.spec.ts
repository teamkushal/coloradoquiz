import { TestBed } from '@angular/core/testing';

import { Experimental3426Service } from './experimental3426.service';

describe('Experimental3426Service', () => {
  let service: Experimental3426Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3426Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
