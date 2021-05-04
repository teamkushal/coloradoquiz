import { TestBed } from '@angular/core/testing';

import { Experimental947Service } from './experimental947.service';

describe('Experimental947Service', () => {
  let service: Experimental947Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental947Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
