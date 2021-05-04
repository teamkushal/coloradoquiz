import { TestBed } from '@angular/core/testing';

import { Experimental3711Service } from './experimental3711.service';

describe('Experimental3711Service', () => {
  let service: Experimental3711Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3711Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
