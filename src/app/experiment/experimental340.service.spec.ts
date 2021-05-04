import { TestBed } from '@angular/core/testing';

import { Experimental340Service } from './experimental340.service';

describe('Experimental340Service', () => {
  let service: Experimental340Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental340Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
