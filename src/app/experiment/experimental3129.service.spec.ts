import { TestBed } from '@angular/core/testing';

import { Experimental3129Service } from './experimental3129.service';

describe('Experimental3129Service', () => {
  let service: Experimental3129Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3129Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
