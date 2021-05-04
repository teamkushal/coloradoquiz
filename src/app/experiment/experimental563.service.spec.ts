import { TestBed } from '@angular/core/testing';

import { Experimental563Service } from './experimental563.service';

describe('Experimental563Service', () => {
  let service: Experimental563Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental563Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
