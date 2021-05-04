import { TestBed } from '@angular/core/testing';

import { Experimental3127Service } from './experimental3127.service';

describe('Experimental3127Service', () => {
  let service: Experimental3127Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3127Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
