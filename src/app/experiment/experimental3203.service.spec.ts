import { TestBed } from '@angular/core/testing';

import { Experimental3203Service } from './experimental3203.service';

describe('Experimental3203Service', () => {
  let service: Experimental3203Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3203Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
