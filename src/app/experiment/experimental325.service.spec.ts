import { TestBed } from '@angular/core/testing';

import { Experimental325Service } from './experimental325.service';

describe('Experimental325Service', () => {
  let service: Experimental325Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental325Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
