import { TestBed } from '@angular/core/testing';

import { Experimental3692Service } from './experimental3692.service';

describe('Experimental3692Service', () => {
  let service: Experimental3692Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3692Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
