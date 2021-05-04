import { TestBed } from '@angular/core/testing';

import { Experimental3941Service } from './experimental3941.service';

describe('Experimental3941Service', () => {
  let service: Experimental3941Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3941Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
