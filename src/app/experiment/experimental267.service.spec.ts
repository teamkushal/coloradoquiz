import { TestBed } from '@angular/core/testing';

import { Experimental267Service } from './experimental267.service';

describe('Experimental267Service', () => {
  let service: Experimental267Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental267Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
