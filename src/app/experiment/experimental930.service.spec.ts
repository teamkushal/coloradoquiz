import { TestBed } from '@angular/core/testing';

import { Experimental930Service } from './experimental930.service';

describe('Experimental930Service', () => {
  let service: Experimental930Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental930Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
