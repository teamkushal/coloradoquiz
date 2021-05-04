import { TestBed } from '@angular/core/testing';

import { Experimental3306Service } from './experimental3306.service';

describe('Experimental3306Service', () => {
  let service: Experimental3306Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3306Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
