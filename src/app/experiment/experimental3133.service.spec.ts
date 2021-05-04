import { TestBed } from '@angular/core/testing';

import { Experimental3133Service } from './experimental3133.service';

describe('Experimental3133Service', () => {
  let service: Experimental3133Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3133Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
