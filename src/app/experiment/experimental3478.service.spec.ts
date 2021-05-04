import { TestBed } from '@angular/core/testing';

import { Experimental3478Service } from './experimental3478.service';

describe('Experimental3478Service', () => {
  let service: Experimental3478Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3478Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
