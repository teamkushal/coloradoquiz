import { TestBed } from '@angular/core/testing';

import { Experimental3373Service } from './experimental3373.service';

describe('Experimental3373Service', () => {
  let service: Experimental3373Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3373Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
