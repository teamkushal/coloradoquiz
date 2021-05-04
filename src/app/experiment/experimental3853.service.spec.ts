import { TestBed } from '@angular/core/testing';

import { Experimental3853Service } from './experimental3853.service';

describe('Experimental3853Service', () => {
  let service: Experimental3853Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3853Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
