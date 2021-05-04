import { TestBed } from '@angular/core/testing';

import { Experimental3627Service } from './experimental3627.service';

describe('Experimental3627Service', () => {
  let service: Experimental3627Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3627Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
