import { TestBed } from '@angular/core/testing';

import { Experimental3696Service } from './experimental3696.service';

describe('Experimental3696Service', () => {
  let service: Experimental3696Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3696Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
