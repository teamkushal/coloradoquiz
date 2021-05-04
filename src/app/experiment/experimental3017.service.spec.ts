import { TestBed } from '@angular/core/testing';

import { Experimental3017Service } from './experimental3017.service';

describe('Experimental3017Service', () => {
  let service: Experimental3017Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3017Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
