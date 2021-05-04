import { TestBed } from '@angular/core/testing';

import { Experimental3108Service } from './experimental3108.service';

describe('Experimental3108Service', () => {
  let service: Experimental3108Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3108Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
