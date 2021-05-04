import { TestBed } from '@angular/core/testing';

import { Experimental922Service } from './experimental922.service';

describe('Experimental922Service', () => {
  let service: Experimental922Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental922Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
