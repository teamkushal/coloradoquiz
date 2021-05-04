import { TestBed } from '@angular/core/testing';

import { Experimental47Service } from './experimental47.service';

describe('Experimental47Service', () => {
  let service: Experimental47Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental47Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
