import { TestBed } from '@angular/core/testing';

import { Experimental3638Service } from './experimental3638.service';

describe('Experimental3638Service', () => {
  let service: Experimental3638Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3638Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
