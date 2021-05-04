import { TestBed } from '@angular/core/testing';

import { Experimental549Service } from './experimental549.service';

describe('Experimental549Service', () => {
  let service: Experimental549Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental549Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
