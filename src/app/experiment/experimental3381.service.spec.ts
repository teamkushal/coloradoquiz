import { TestBed } from '@angular/core/testing';

import { Experimental3381Service } from './experimental3381.service';

describe('Experimental3381Service', () => {
  let service: Experimental3381Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3381Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
