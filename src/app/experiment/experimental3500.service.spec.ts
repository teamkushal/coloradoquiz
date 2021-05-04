import { TestBed } from '@angular/core/testing';

import { Experimental3500Service } from './experimental3500.service';

describe('Experimental3500Service', () => {
  let service: Experimental3500Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3500Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
