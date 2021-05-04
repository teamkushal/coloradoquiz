import { TestBed } from '@angular/core/testing';

import { Experimental3746Service } from './experimental3746.service';

describe('Experimental3746Service', () => {
  let service: Experimental3746Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3746Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
