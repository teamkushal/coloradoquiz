import { TestBed } from '@angular/core/testing';

import { Experimental357Service } from './experimental357.service';

describe('Experimental357Service', () => {
  let service: Experimental357Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental357Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
