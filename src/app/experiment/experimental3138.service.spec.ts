import { TestBed } from '@angular/core/testing';

import { Experimental3138Service } from './experimental3138.service';

describe('Experimental3138Service', () => {
  let service: Experimental3138Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3138Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
