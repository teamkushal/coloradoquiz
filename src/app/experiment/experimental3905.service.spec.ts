import { TestBed } from '@angular/core/testing';

import { Experimental3905Service } from './experimental3905.service';

describe('Experimental3905Service', () => {
  let service: Experimental3905Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3905Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
