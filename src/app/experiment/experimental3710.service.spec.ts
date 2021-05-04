import { TestBed } from '@angular/core/testing';

import { Experimental3710Service } from './experimental3710.service';

describe('Experimental3710Service', () => {
  let service: Experimental3710Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3710Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
