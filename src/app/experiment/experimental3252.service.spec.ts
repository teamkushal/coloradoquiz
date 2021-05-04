import { TestBed } from '@angular/core/testing';

import { Experimental3252Service } from './experimental3252.service';

describe('Experimental3252Service', () => {
  let service: Experimental3252Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3252Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
