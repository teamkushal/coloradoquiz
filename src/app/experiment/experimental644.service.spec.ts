import { TestBed } from '@angular/core/testing';

import { Experimental644Service } from './experimental644.service';

describe('Experimental644Service', () => {
  let service: Experimental644Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental644Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
