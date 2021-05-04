import { TestBed } from '@angular/core/testing';

import { Experimental836Service } from './experimental836.service';

describe('Experimental836Service', () => {
  let service: Experimental836Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental836Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
