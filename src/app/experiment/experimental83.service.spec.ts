import { TestBed } from '@angular/core/testing';

import { Experimental83Service } from './experimental83.service';

describe('Experimental83Service', () => {
  let service: Experimental83Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental83Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
