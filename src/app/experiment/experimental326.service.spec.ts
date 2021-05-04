import { TestBed } from '@angular/core/testing';

import { Experimental326Service } from './experimental326.service';

describe('Experimental326Service', () => {
  let service: Experimental326Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental326Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
