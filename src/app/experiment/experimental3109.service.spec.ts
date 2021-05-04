import { TestBed } from '@angular/core/testing';

import { Experimental3109Service } from './experimental3109.service';

describe('Experimental3109Service', () => {
  let service: Experimental3109Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3109Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
