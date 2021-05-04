import { TestBed } from '@angular/core/testing';

import { Experimental707Service } from './experimental707.service';

describe('Experimental707Service', () => {
  let service: Experimental707Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental707Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
