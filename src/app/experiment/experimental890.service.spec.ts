import { TestBed } from '@angular/core/testing';

import { Experimental890Service } from './experimental890.service';

describe('Experimental890Service', () => {
  let service: Experimental890Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental890Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
