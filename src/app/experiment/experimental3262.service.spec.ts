import { TestBed } from '@angular/core/testing';

import { Experimental3262Service } from './experimental3262.service';

describe('Experimental3262Service', () => {
  let service: Experimental3262Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3262Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
