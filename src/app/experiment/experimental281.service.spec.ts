import { TestBed } from '@angular/core/testing';

import { Experimental281Service } from './experimental281.service';

describe('Experimental281Service', () => {
  let service: Experimental281Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental281Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
