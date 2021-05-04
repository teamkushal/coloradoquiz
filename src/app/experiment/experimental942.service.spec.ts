import { TestBed } from '@angular/core/testing';

import { Experimental942Service } from './experimental942.service';

describe('Experimental942Service', () => {
  let service: Experimental942Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental942Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
