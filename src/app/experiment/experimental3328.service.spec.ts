import { TestBed } from '@angular/core/testing';

import { Experimental3328Service } from './experimental3328.service';

describe('Experimental3328Service', () => {
  let service: Experimental3328Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3328Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
