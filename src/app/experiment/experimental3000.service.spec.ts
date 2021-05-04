import { TestBed } from '@angular/core/testing';

import { Experimental3000Service } from './experimental3000.service';

describe('Experimental3000Service', () => {
  let service: Experimental3000Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3000Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
