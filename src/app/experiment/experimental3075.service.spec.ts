import { TestBed } from '@angular/core/testing';

import { Experimental3075Service } from './experimental3075.service';

describe('Experimental3075Service', () => {
  let service: Experimental3075Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3075Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
