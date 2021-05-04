import { TestBed } from '@angular/core/testing';

import { Experimental3155Service } from './experimental3155.service';

describe('Experimental3155Service', () => {
  let service: Experimental3155Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3155Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
