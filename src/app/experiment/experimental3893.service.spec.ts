import { TestBed } from '@angular/core/testing';

import { Experimental3893Service } from './experimental3893.service';

describe('Experimental3893Service', () => {
  let service: Experimental3893Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3893Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
