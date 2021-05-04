import { TestBed } from '@angular/core/testing';

import { Experimental3176Service } from './experimental3176.service';

describe('Experimental3176Service', () => {
  let service: Experimental3176Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3176Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
