import { TestBed } from '@angular/core/testing';

import { Experimental751Service } from './experimental751.service';

describe('Experimental751Service', () => {
  let service: Experimental751Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental751Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
