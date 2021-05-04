import { TestBed } from '@angular/core/testing';

import { Experimental3782Service } from './experimental3782.service';

describe('Experimental3782Service', () => {
  let service: Experimental3782Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3782Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
