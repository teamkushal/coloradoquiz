import { TestBed } from '@angular/core/testing';

import { Experimental3569Service } from './experimental3569.service';

describe('Experimental3569Service', () => {
  let service: Experimental3569Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3569Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
