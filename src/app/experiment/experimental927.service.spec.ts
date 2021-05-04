import { TestBed } from '@angular/core/testing';

import { Experimental927Service } from './experimental927.service';

describe('Experimental927Service', () => {
  let service: Experimental927Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental927Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
