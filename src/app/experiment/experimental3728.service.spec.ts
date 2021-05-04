import { TestBed } from '@angular/core/testing';

import { Experimental3728Service } from './experimental3728.service';

describe('Experimental3728Service', () => {
  let service: Experimental3728Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3728Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
