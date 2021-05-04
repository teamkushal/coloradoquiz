import { TestBed } from '@angular/core/testing';

import { Experimental3445Service } from './experimental3445.service';

describe('Experimental3445Service', () => {
  let service: Experimental3445Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3445Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
