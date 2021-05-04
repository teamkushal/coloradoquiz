import { TestBed } from '@angular/core/testing';

import { Experimental3177Service } from './experimental3177.service';

describe('Experimental3177Service', () => {
  let service: Experimental3177Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3177Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
