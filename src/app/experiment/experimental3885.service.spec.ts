import { TestBed } from '@angular/core/testing';

import { Experimental3885Service } from './experimental3885.service';

describe('Experimental3885Service', () => {
  let service: Experimental3885Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3885Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
