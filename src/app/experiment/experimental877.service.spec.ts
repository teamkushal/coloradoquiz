import { TestBed } from '@angular/core/testing';

import { Experimental877Service } from './experimental877.service';

describe('Experimental877Service', () => {
  let service: Experimental877Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental877Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
