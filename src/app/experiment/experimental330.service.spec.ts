import { TestBed } from '@angular/core/testing';

import { Experimental330Service } from './experimental330.service';

describe('Experimental330Service', () => {
  let service: Experimental330Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental330Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
