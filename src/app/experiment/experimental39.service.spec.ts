import { TestBed } from '@angular/core/testing';

import { Experimental39Service } from './experimental39.service';

describe('Experimental39Service', () => {
  let service: Experimental39Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental39Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
