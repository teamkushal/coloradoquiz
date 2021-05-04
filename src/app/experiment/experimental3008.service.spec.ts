import { TestBed } from '@angular/core/testing';

import { Experimental3008Service } from './experimental3008.service';

describe('Experimental3008Service', () => {
  let service: Experimental3008Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3008Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
