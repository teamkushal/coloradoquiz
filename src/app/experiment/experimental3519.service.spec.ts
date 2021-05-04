import { TestBed } from '@angular/core/testing';

import { Experimental3519Service } from './experimental3519.service';

describe('Experimental3519Service', () => {
  let service: Experimental3519Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3519Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
