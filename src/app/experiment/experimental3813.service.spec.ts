import { TestBed } from '@angular/core/testing';

import { Experimental3813Service } from './experimental3813.service';

describe('Experimental3813Service', () => {
  let service: Experimental3813Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3813Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
