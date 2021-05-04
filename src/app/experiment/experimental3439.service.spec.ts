import { TestBed } from '@angular/core/testing';

import { Experimental3439Service } from './experimental3439.service';

describe('Experimental3439Service', () => {
  let service: Experimental3439Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3439Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
