import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2243Component } from './test-component2243.component';

describe('TestComponent2243Component', () => {
  let component: TestComponent2243Component;
  let fixture: ComponentFixture<TestComponent2243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2243Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
