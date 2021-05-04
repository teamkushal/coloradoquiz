import { TestBed } from '@angular/core/testing';

import { Experimental3035Service } from './experimental3035.service';

describe('Experimental3035Service', () => {
  let service: Experimental3035Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3035Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
