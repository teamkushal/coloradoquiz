import { TestBed } from '@angular/core/testing';

import { Experimental389Service } from './experimental389.service';

describe('Experimental389Service', () => {
  let service: Experimental389Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental389Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
