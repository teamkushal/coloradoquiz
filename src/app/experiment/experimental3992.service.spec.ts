import { TestBed } from '@angular/core/testing';

import { Experimental3992Service } from './experimental3992.service';

describe('Experimental3992Service', () => {
  let service: Experimental3992Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3992Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
