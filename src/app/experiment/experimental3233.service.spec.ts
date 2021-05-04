import { TestBed } from '@angular/core/testing';

import { Experimental3233Service } from './experimental3233.service';

describe('Experimental3233Service', () => {
  let service: Experimental3233Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3233Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
