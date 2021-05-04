import { TestBed } from '@angular/core/testing';

import { Experimental3616Service } from './experimental3616.service';

describe('Experimental3616Service', () => {
  let service: Experimental3616Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3616Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
