import { TestBed } from '@angular/core/testing';

import { Experimental3847Service } from './experimental3847.service';

describe('Experimental3847Service', () => {
  let service: Experimental3847Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3847Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
