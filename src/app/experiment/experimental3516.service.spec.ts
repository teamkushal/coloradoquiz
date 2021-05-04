import { TestBed } from '@angular/core/testing';

import { Experimental3516Service } from './experimental3516.service';

describe('Experimental3516Service', () => {
  let service: Experimental3516Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3516Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
