import { TestBed } from '@angular/core/testing';

import { Experimental3827Service } from './experimental3827.service';

describe('Experimental3827Service', () => {
  let service: Experimental3827Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3827Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
