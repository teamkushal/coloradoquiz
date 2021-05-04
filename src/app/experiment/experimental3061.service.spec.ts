import { TestBed } from '@angular/core/testing';

import { Experimental3061Service } from './experimental3061.service';

describe('Experimental3061Service', () => {
  let service: Experimental3061Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3061Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
