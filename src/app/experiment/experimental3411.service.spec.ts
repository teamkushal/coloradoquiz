import { TestBed } from '@angular/core/testing';

import { Experimental3411Service } from './experimental3411.service';

describe('Experimental3411Service', () => {
  let service: Experimental3411Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3411Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
