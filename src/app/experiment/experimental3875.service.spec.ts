import { TestBed } from '@angular/core/testing';

import { Experimental3875Service } from './experimental3875.service';

describe('Experimental3875Service', () => {
  let service: Experimental3875Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3875Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
