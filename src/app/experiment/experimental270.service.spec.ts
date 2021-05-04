import { TestBed } from '@angular/core/testing';

import { Experimental270Service } from './experimental270.service';

describe('Experimental270Service', () => {
  let service: Experimental270Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental270Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
