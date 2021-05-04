import { TestBed } from '@angular/core/testing';

import { Experimental3966Service } from './experimental3966.service';

describe('Experimental3966Service', () => {
  let service: Experimental3966Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3966Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
