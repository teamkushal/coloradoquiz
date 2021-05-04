import { TestBed } from '@angular/core/testing';

import { Experimental3117Service } from './experimental3117.service';

describe('Experimental3117Service', () => {
  let service: Experimental3117Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3117Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
