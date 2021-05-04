import { TestBed } from '@angular/core/testing';

import { Experimental3105Service } from './experimental3105.service';

describe('Experimental3105Service', () => {
  let service: Experimental3105Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3105Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
