import { TestBed } from '@angular/core/testing';

import { Experimental3146Service } from './experimental3146.service';

describe('Experimental3146Service', () => {
  let service: Experimental3146Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3146Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
