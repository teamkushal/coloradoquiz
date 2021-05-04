import { TestBed } from '@angular/core/testing';

import { Experimental3683Service } from './experimental3683.service';

describe('Experimental3683Service', () => {
  let service: Experimental3683Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3683Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
