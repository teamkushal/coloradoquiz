import { TestBed } from '@angular/core/testing';

import { Experimental3073Service } from './experimental3073.service';

describe('Experimental3073Service', () => {
  let service: Experimental3073Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3073Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
