import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2723Component } from './test-component2723.component';

describe('TestComponent2723Component', () => {
  let component: TestComponent2723Component;
  let fixture: ComponentFixture<TestComponent2723Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2723Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
