import { TestBed } from '@angular/core/testing';

import { Experimental3205Service } from './experimental3205.service';

describe('Experimental3205Service', () => {
  let service: Experimental3205Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3205Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
