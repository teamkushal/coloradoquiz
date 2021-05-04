import { TestBed } from '@angular/core/testing';

import { Experimental3319Service } from './experimental3319.service';

describe('Experimental3319Service', () => {
  let service: Experimental3319Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3319Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
