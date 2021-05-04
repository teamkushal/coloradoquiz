import { TestBed } from '@angular/core/testing';

import { Experimental3908Service } from './experimental3908.service';

describe('Experimental3908Service', () => {
  let service: Experimental3908Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3908Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
