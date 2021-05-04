import { TestBed } from '@angular/core/testing';

import { Experimental280Service } from './experimental280.service';

describe('Experimental280Service', () => {
  let service: Experimental280Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental280Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
