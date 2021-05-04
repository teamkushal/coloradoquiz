import { TestBed } from '@angular/core/testing';

import { Experimental3432Service } from './experimental3432.service';

describe('Experimental3432Service', () => {
  let service: Experimental3432Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3432Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
