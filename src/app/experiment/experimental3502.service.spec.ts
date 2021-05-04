import { TestBed } from '@angular/core/testing';

import { Experimental3502Service } from './experimental3502.service';

describe('Experimental3502Service', () => {
  let service: Experimental3502Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3502Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
