import { TestBed } from '@angular/core/testing';

import { Experimental3812Service } from './experimental3812.service';

describe('Experimental3812Service', () => {
  let service: Experimental3812Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3812Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
