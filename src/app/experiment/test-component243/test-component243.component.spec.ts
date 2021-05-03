import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent243Component } from './test-component243.component';

describe('TestComponent243Component', () => {
  let component: TestComponent243Component;
  let fixture: ComponentFixture<TestComponent243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent243Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
