import { TestBed } from '@angular/core/testing';

import { Experimental3923Service } from './experimental3923.service';

describe('Experimental3923Service', () => {
  let service: Experimental3923Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3923Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
