import { TestBed } from '@angular/core/testing';

import { Experimental3517Service } from './experimental3517.service';

describe('Experimental3517Service', () => {
  let service: Experimental3517Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3517Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
