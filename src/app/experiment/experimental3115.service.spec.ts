import { TestBed } from '@angular/core/testing';

import { Experimental3115Service } from './experimental3115.service';

describe('Experimental3115Service', () => {
  let service: Experimental3115Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3115Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
