import { TestBed } from '@angular/core/testing';

import { Experimental3878Service } from './experimental3878.service';

describe('Experimental3878Service', () => {
  let service: Experimental3878Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3878Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
