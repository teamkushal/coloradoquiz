import { TestBed } from '@angular/core/testing';

import { Experimental595Service } from './experimental595.service';

describe('Experimental595Service', () => {
  let service: Experimental595Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental595Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
