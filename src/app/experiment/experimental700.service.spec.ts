import { TestBed } from '@angular/core/testing';

import { Experimental700Service } from './experimental700.service';

describe('Experimental700Service', () => {
  let service: Experimental700Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental700Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
