import { TestBed } from '@angular/core/testing';

import { Experimental3128Service } from './experimental3128.service';

describe('Experimental3128Service', () => {
  let service: Experimental3128Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3128Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
