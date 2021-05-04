import { TestBed } from '@angular/core/testing';

import { Experimental3839Service } from './experimental3839.service';

describe('Experimental3839Service', () => {
  let service: Experimental3839Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3839Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
