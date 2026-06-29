import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('is not loading initially', () => {
    expect(service.loading()).toBe(false);
  });

  it('is loading while at least one request is in flight', () => {
    service.show();
    expect(service.loading()).toBe(true);
  });

  it('stays loading until every request has finished', () => {
    service.show();
    service.show();
    service.hide();
    expect(service.loading()).toBe(true);
    service.hide();
    expect(service.loading()).toBe(false);
  });

  it('never goes below zero in-flight requests', () => {
    service.hide();
    expect(service.loading()).toBe(false);
    service.show();
    expect(service.loading()).toBe(true);
  });
});
