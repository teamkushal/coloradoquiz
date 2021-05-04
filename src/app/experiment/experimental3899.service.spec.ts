import { TestBed } from '@angular/core/testing';

import { Experimental3899Service } from './experimental3899.service';

describe('Experimental3899Service', () => {
  let service: Experimental3899Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3899Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
