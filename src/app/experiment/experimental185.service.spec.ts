import { TestBed } from '@angular/core/testing';

import { Experimental185Service } from './experimental185.service';

describe('Experimental185Service', () => {
  let service: Experimental185Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental185Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
