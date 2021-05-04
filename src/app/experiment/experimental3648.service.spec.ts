import { TestBed } from '@angular/core/testing';

import { Experimental3648Service } from './experimental3648.service';

describe('Experimental3648Service', () => {
  let service: Experimental3648Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3648Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
